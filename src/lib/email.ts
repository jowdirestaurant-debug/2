import { Resend } from "resend";
import type { Locale } from "./i18n";

const FROM =
  process.env.RESEND_FROM_EMAIL || "Jowdi Restaurant <onboarding@resend.dev>";

function getClient() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function wrap(locale: Locale, title: string, body: string) {
  const dir = locale === "ar" ? "rtl" : "ltr";
  return `<!DOCTYPE html><html dir="${dir}" lang="${locale}"><body style="margin:0;background:#faf7f2;font-family:Tahoma,Arial,sans-serif;">
  <div style="max-width:560px;margin:24px auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #eee;">
    <div style="background:#5b4636;color:#fff;padding:20px 28px;text-align:center;">
      <h1 style="margin:0;font-size:22px;">${locale === "ar" ? "مطعم الجودي" : "Jowdi Restaurant"}</h1>
    </div>
    <div style="padding:28px;color:#2b2118;line-height:1.8;" dir="${dir}">
      <h2 style="margin-top:0;color:#5b4636;">${title}</h2>
      ${body}
    </div>
    <div style="padding:16px;text-align:center;color:#8a7a6b;font-size:12px;border-top:1px solid #f0ebe3;">
      ${locale === "ar" ? "مطعم الجودي — نكهات أصيلة" : "Jowdi Restaurant — Authentic flavors"}
    </div>
  </div></body></html>`;
}

async function send(to: string, subject: string, html: string) {
  const client = getClient();
  if (!client) {
    console.warn("[email] RESEND_API_KEY not set. Skipping email to", to);
    return { skipped: true };
  }
  try {
    const res = await client.emails.send({ from: FROM, to, subject, html });
    return { skipped: false, id: res.data?.id, error: res.error?.message };
  } catch (e) {
    console.error("[email] send failed", e);
    return { skipped: false, error: String(e) };
  }
}

export async function sendVerificationEmail(to: string, name: string, code: string, locale: Locale) {
  const subject = locale === "ar" ? "تأكيد حسابك — مطعم الجودي" : "Verify your account — Jowdi Restaurant";
  const body =
    locale === "ar"
      ? `<p>مرحباً ${name}،</p><p>شكراً لتسجيلك في مطعم الجودي. رمز التحقق الخاص بك هو:</p><p style="font-size:28px;font-weight:bold;letter-spacing:6px;text-align:center;color:#c9a227;">${code}</p>`
      : `<p>Hello ${name},</p><p>Thank you for registering at Jowdi Restaurant. Your verification code is:</p><p style="font-size:28px;font-weight:bold;letter-spacing:6px;text-align:center;color:#c9a227;">${code}</p>`;
  return send(to, subject, wrap(locale, subject, body));
}

export async function sendResetEmail(to: string, name: string, code: string, locale: Locale) {
  const subject = locale === "ar" ? "رمز استعادة كلمة المرور — مطعم الجودي" : "Password recovery code — Jowdi Restaurant";
  const body =
    locale === "ar"
      ? `<p>مرحباً ${name}،</p><p>رمز استعادة كلمة المرور الخاص بك (صالح لمدة 15 دقيقة):</p><p style="font-size:28px;font-weight:bold;letter-spacing:6px;text-align:center;color:#c9a227;">${code}</p><p>إذا لم تطلب هذا الرمز، تجاهل هذه الرسالة.</p>`
      : `<p>Hello ${name},</p><p>Your password recovery code (valid for 15 minutes):</p><p style="font-size:28px;font-weight:bold;letter-spacing:6px;text-align:center;color:#c9a227;">${code}</p><p>If you did not request this, please ignore this email.</p>`;
  return send(to, subject, wrap(locale, subject, body));
}

export async function sendOrderConfirmationEmail(
  to: string,
  name: string,
  orderNumber: string,
  total: string,
  locale: Locale
) {
  const subject =
    locale === "ar"
      ? `تأكيد الطلب ${orderNumber} — مطعم الجودي`
      : `Order confirmation ${orderNumber} — Jowdi Restaurant`;
  const body =
    locale === "ar"
      ? `<p>مرحباً ${name}،</p><p>تم استلام طلبك رقم <b>${orderNumber}</b> بنجاح وجاري تحضيره.</p><p>الإجمالي: <b>${total} د.ب</b></p><p>شكراً لاختيارك مطعم الجودي!</p>`
      : `<p>Hello ${name},</p><p>Your order <b>${orderNumber}</b> has been received and is being prepared.</p><p>Total: <b>BHD ${total}</b></p><p>Thank you for choosing Jowdi Restaurant!</p>`;
  return send(to, subject, wrap(locale, subject, body));
}
