import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { eq } from 'drizzle-orm';
import { db } from '@/db'; // تأكد من مسار db لديك
import { orders, orderItems } from '@/db/schema'; 

export async function GET(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get('ipad_admin_token');
  if (!token || token.value !== 'authenticated') {
    return NextResponse.redirect(new URL('/ipad-login.html', request.url));
  }

  const { searchParams } = new URL(request.url);
  const orderId = searchParams.get('id');

  if (!orderId) return NextResponse.redirect(new URL('/api/ipad-dashboard', request.url));

  const [order] = await db.select().from(orders).where(eq(orders.id, Number(orderId)));
  if (!order) return NextResponse.redirect(new URL('/api/ipad-dashboard', request.url));

  const items = await db.select().from(orderItems).where(eq(orderItems.orderId, Number(orderId)));

  const itemsHtml = items.map(item => {
    // معالجة الأسماء بحيث لو كان الإنجليزي فارغاً لا يسبب مشكلة في العرض
    const enName = item.nameEn ? ` | ${item.nameEn}` : '';
    const sizeAr = item.sizeNameAr || '';
    const sizeEn = item.sizeNameEn ? ` | ${item.sizeNameEn}` : '';
    const sizeDisplay = (sizeAr || sizeEn) ? `<div style="color:#666; font-size:14px; margin-top:4px;">الحجم | Size: ${sizeAr}${sizeEn}</div>` : '';

    return `
      <div style="border-bottom: 1px dashed #ccc; padding: 10px 0;">
          <div style="display:flex; justify-content:space-between; font-size: 16px;">
              <strong>${item.quantity}x ${item.nameAr}${enName}</strong>
              <span>${item.lineTotal} BHD</span>
          </div>
          ${sizeDisplay}
      </div>
    `;
  }).join('');

  const orderTypeMap: Record<string, string> = {
    delivery: 'توصيل | Delivery',
    takeaway: 'استلام | Takeaway',
    dine_in: 'محلي | Dine-in'
  };

  const htmlContent = `
    <!DOCTYPE html>
    <html dir="rtl" lang="ar">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- أضفنا هذا السطر لمنع سفاري من تخزين الفاتورة القديمة -->
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <title>فاتورة الطلب | Order #${order.orderNumber}</title>
        <style>
            body { font-family: Arial, sans-serif; background: #f3f4f6; margin: 0; padding: 20px; }
            .invoice { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); max-width: 600px; margin: 0 auto; }
            .btn-back { display: inline-block; background: #374151; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin-bottom: 20px; font-weight: bold; }
            .row { display: flex; justify-content: space-between; margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid #eee; align-items: center; }
            .label { color: #555; }
            .val { font-weight: bold; text-align: left; direction: ltr; }
        </style>
    </head>
    <body>
        <a href="/api/ipad-dashboard" class="btn-back">← رجوع للوحة | Back to Dashboard</a>
        
        <div class="invoice">
            <h2 style="text-align:center; border-bottom: 2px solid #000; padding-bottom:10px; margin-top:0;">
                فاتورة الطلب | Order #${order.orderNumber}
            </h2>
            
            <div class="row"><strong class="label">الزبون | Customer:</strong> <span class="val">${order.customerName}</span></div>
            <div class="row"><strong class="label">الهاتف | Phone:</strong> <span class="val">${order.customerPhone}</span></div>
            <div class="row"><strong class="label">النوع | Type:</strong> <span class="val">${orderTypeMap[order.orderType] || order.orderType}</span></div>
            <div class="row"><strong class="label">الدفع | Payment:</strong> <span class="val">${order.paymentMethod}</span></div>
            ${order.addressDetails ? `<div class="row"><strong class="label">العنوان | Address:</strong> <span class="val">${order.addressDetails}</span></div>` : ''}
            ${order.notes ? `<div class="row"><strong class="label" style="color:red;">ملاحظات | Notes:</strong> <span class="val" style="color:red;">${order.notes}</span></div>` : ''}
            
            <h3 style="background:#f9fafb; padding:10px; margin-top:20px; border-radius:4px; border: 1px solid #eee;">
                الأصناف | Items:
            </h3>
            
            ${itemsHtml}
            
            <div style="margin-top:20px; padding:15px; background:#fef3c7; font-size:20px; border-radius:4px; text-align: left; direction: ltr; border: 1px solid #fde68a;">
                <strong>Total | الإجمالي: ${order.total} BHD</strong>
            </div>
        </div>
    </body>
    </html>
  `;

  return new NextResponse(htmlContent, { 
    status: 200, 
    headers: { 
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store, max-age=0' // إجبار المتصفح على جلب النسخة الجديدة دائماً
    } 
  });
}