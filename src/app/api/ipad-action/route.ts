import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { eq } from 'drizzle-orm';
import { db } from '@/db'; 
import { orders } from '@/db/schema'; 

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get('ipad_admin_token');
  if (!token || token.value !== 'authenticated') {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const body = await request.text();
  const params = new URLSearchParams(body);
  const orderId = Number(params.get('orderId'));
  const newStatus = params.get('newStatus');
  const isAjax = params.get('ajax') === '1'; // التحقق من طريقة الإرسال

  if (orderId && newStatus) {
    await db.update(orders).set({ status: newStatus }).where(eq(orders.id, orderId));
  }

  if (isAjax) {
    // إذا كان الطلب صامت (AJAX)
    return NextResponse.json({ success: true });
  } else {
    // إذا كان الطلب من النسخة المخبأة القديمة في سفاري، نعيده للوحة
    const host = request.headers.get('host');
    return NextResponse.redirect(`http://${host}/api/ipad-dashboard`, 302);
  }
}