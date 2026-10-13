// src/lib/parcel.ts

interface OrderDetailsForParcel {
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  deliveryAddress: string;
  totalAmount: number;
  items: Array<{ name: string; quantity: number; price: number }>;
}

export async function sendOrderToParcel(order: OrderDetailsForParcel, clientId: string, secretKey: string) {
  try {
    // 1. الحصول على الـ Token من Parcel (حسب توثيقهم للـ OAuth / Authentication)
    const tokenResponse = await fetch("https://api.tryparcel.com/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientId,
        clientSecret: secretKey,
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error("Failed to authenticate with Parcel API");
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.accessToken || tokenData.token;

    // 2. إرسال تفاصيل الطلب (Order Details) إلى نقطة نهاية الطلبات في Parcel
    const orderResponse = await fetch("https://api.tryparcel.com/api/v4/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        externalOrderId: order.orderNumber,
        customer: {
          name: order.customerName,
          phone: order.customerPhone,
        },
        address: {
          formattedAddress: order.deliveryAddress,
        },
        payment: {
          total: order.totalAmount,
        },
        items: order.items,
      }),
    });

    if (!orderResponse.ok) {
      const errorText = await orderResponse.text();
      throw new Error(`Parcel Order Error: ${errorText}`);
    }

    const result = await orderResponse.json();
    return { success: true, data: result };
  } catch (error) {
    console.error("Error sending order to Parcel:", error);
    return { success: false, error };
  }
}