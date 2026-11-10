import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  if (email === 'admin@jowdi.com' && password === '123456') { 
    
    const cookieStore = await cookies();
    cookieStore.set('ipad_admin_token', 'authenticated', { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7
    });

    // سحب الـ IP الذي يتصل منه الأيباد لضمان التوجيه الصحيح
    const host = request.headers.get('host');
    
    // التوجيه للوحة التحكم باستخدام الـ IP بدلاً من localhost
    return NextResponse.redirect(`http://${host}/api/ipad-dashboard`, 302);
  }

  const host = request.headers.get('host');
  return NextResponse.redirect(`http://${host}/ipad-login.html?error=invalid`, 302);
}