import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { desc } from 'drizzle-orm';
import { db } from '@/db'; 
import { orders } from '@/db/schema'; 

export async function GET(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get('ipad_admin_token');

  if (!token || token.value !== 'authenticated') {
    return NextResponse.redirect(new URL('/ipad-login.html', request.url));
  }

  const { searchParams } = new URL(request.url);
  const isAjax = searchParams.get('ajax') === '1';

  const recentOrders = await db.select().from(orders).orderBy(desc(orders.createdAt)).limit(30);
  const hasNewOrder = recentOrders.some(order => order.status === 'pending');

  const getStatusText = (status: string) => {
    const statuses: Record<string, { text: string, color: string }> = {
      pending: { text: 'قيد الانتظار | Pending', color: '#fee2e2; color: #991b1b;' },
      confirmed: { text: 'مؤكد | Confirmed', color: '#ffedd5; color: #c2410c;' },
      preparing: { text: 'قيد التجهيز | Preparing', color: '#fef08a; color: #854d0e;' },
      ready: { text: 'جاهز | Ready', color: '#d9f99d; color: #3f6212;' },
      out_for_delivery: { text: 'في الطريق | Out for Delivery', color: '#e0f2fe; color: #075985;' },
      completed: { text: 'مكتمل | Completed', color: '#bbf7d0; color: #166534;' },
      cancelled: { text: 'ملغي | Cancelled', color: '#f3f4f6; color: #374151;' }
    };
    return statuses[status] || { text: status, color: '#fee2e2; color: #991b1b;' };
  };

  let ordersHtml = '';
  if (recentOrders.length === 0) {
    ordersHtml = '<p style="text-align:center; padding: 20px;">لا توجد طلبات | No orders found</p>';
  } else {
    ordersHtml = recentOrders.map(order => {
      const statusInfo = getStatusText(order.status);
      
      let actionButtons = `<a href="/api/ipad-order?id=${order.id}" class="btn btn-details">الفاتورة | Invoice</a>`;

      if (order.status === 'pending') {
        actionButtons += `
          <button type="button" onclick="updateOrder(${order.id}, 'preparing')" class="btn btn-accept">قبول | Accept</button>
          <button type="button" onclick="updateOrder(${order.id}, 'cancelled')" class="btn btn-cancel">إلغاء | Cancel</button>
        `;
      } else if (order.status === 'preparing') {
        actionButtons += `<button type="button" onclick="updateOrder(${order.id}, 'ready')" class="btn btn-ready">جاهز | Ready</button>`;
      } else if (order.status === 'ready' && order.orderType === 'delivery') {
        actionButtons += `<button type="button" onclick="updateOrder(${order.id}, 'out_for_delivery')" class="btn btn-delivery">للتوصيل | Dispatch</button>`;
      } else if (order.status === 'out_for_delivery' || (order.status === 'ready' && order.orderType !== 'delivery')) {
         actionButtons += `<button type="button" onclick="updateOrder(${order.id}, 'completed')" class="btn btn-accept">إنهاء | Complete</button>`;
      }

      return `
        <div class="flex-between">
            <div>
                <strong>الطلب | Order #${order.orderNumber}</strong><br>
                <span class="customer-info">${order.customerName} - ${order.total} BHD</span><br>
                <div class="actions">${actionButtons}</div>
            </div>
            <span class="status" style="background: ${statusInfo.color}">${statusInfo.text}</span>
        </div>
      `;
    }).join('');
  }

  if (isAjax) {
    return NextResponse.json({ html: ordersHtml, hasNewOrder: hasNewOrder }, {
      headers: { 'Cache-Control': 'no-store, max-age=0' }
    });
  }
  
  const htmlContent = `
    <!DOCTYPE html>
    <html dir="rtl" lang="ar">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <title>طلبات مطعم الجودي | Al-Jowdi Orders</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 15px; transition: background 0.3s; background: #f3f4f6; }
            .header { background: #2563eb; color: white; padding: 15px; border-radius: 8px; text-align: center; margin-bottom: 15px; }
            .card { background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .flex-between { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee; }
            .actions { margin-top: 10px; }
            .btn { padding: 8px 12px; border: none; border-radius: 4px; color: white; font-size: 14px; cursor: pointer; margin-left: 5px; text-decoration: none; display: inline-block; margin-bottom: 5px; }
            .btn-details { background: #4b5563; }
            .btn-accept { background: #16a34a; }
            .btn-cancel { background: #dc2626; }
            .btn-ready { background: #ca8a04; }
            .btn-delivery { background: #2563eb; }
            .status { padding: 5px 10px; border-radius: 4px; font-size: 13px; font-weight: bold; }
            
            @keyframes flashRed {
                0% { background-color: #f3f4f6; }
                50% { background-color: #fca5a5; }
                100% { background-color: #f3f4f6; }
            }
            .alert-active { animation: flashRed 1.5s infinite; }
            
            #startOverlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 9999; cursor: pointer; }
        </style>
    </head>
    <body class="${hasNewOrder ? 'alert-active' : ''}">
        
        <div id="startOverlay" onclick="startApp()">
            <h1 style="font-size:32px; margin-bottom:10px;">اضغط هنا لفتح النظام</h1>
            <p style="font-size:18px; color:#ccc;">Tap anywhere to start the system</p>
        </div>

        <audio id="alertSound" src="https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3" preload="none" loop></audio>

        <div class="header">
            <h2 style="margin:0;">مطعم الجودي | Al-Jowdi</h2>
            <p style="margin:0; font-size: 14px; opacity: 0.8;">تحديث صامت كل 15 ثانية | Live Update</p>
        </div>
        
        <div class="card" id="ordersContainer">
            ${ordersHtml}
        </div>

        <script>
            var sound = document.getElementById('alertSound');
            var overlay = document.getElementById('startOverlay');
            var container = document.getElementById('ordersContainer');
            var isAppStarted = false;

            function startApp() {
                sound.muted = true;
                sound.play().catch(function(){});

                overlay.style.display = 'none';
                isAppStarted = true;

                if (document.body.classList.contains('alert-active')) {
                    sound.muted = false;
                }

                setInterval(fetchOrders, 15000);
            }

            function fetchOrders() {
                if (!isAppStarted) return;
                var xhr = new XMLHttpRequest();
                xhr.open('GET', '/api/ipad-dashboard?ajax=1', true);
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        try {
                            var res = JSON.parse(xhr.responseText);
                            
                            if (container.innerHTML !== res.html) {
                                container.innerHTML = res.html;
                            }
                            
                            if (res.hasNewOrder) {
                                document.body.classList.add('alert-active');
                                sound.muted = false;
                            } else {
                                document.body.classList.remove('alert-active');
                                sound.muted = true;
                            }
                        } catch(e) {}
                    }
                };
                xhr.send();
            }

            function updateOrder(orderId, newStatus) {
                var xhr = new XMLHttpRequest();
                xhr.open('POST', '/api/ipad-action', true);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.onload = function() {
                    fetchOrders();
                };
                xhr.send('orderId=' + orderId + '&newStatus=' + newStatus + '&ajax=1');
            }
        </script>
    </body>
    </html>
  `;

  return new NextResponse(htmlContent, {
    status: 200,
    headers: { 
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store, max-age=0'
    },
  });
}