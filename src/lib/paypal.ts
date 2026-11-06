const SANDBOX = "https://api-m.sandbox.paypal.com";

export async function getPayPalAccessToken(): Promise<string> {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_CLIENT_SECRET;
  if (!clientId || !secret) {
    throw new Error("PayPal credentials not configured");
  }
  const auth = Buffer.from(`${clientId}:${secret}`).toString("base64");
  const res = await fetch(`${SANDBOX}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`PayPal token failed: ${t}`);
  }
  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

export async function createHdUnlockOrder(accessToken: string) {
  const res = await fetch(`${SANDBOX}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          description: "FastCut MVP — HD export unlock (one-time)",
          amount: {
            currency_code: "USD",
            value: "5.00",
          },
        },
      ],
    }),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Create order failed: ${t}`);
  }
  return res.json() as Promise<{ id: string; status: string }>;
}

export async function captureOrder(accessToken: string, orderId: string) {
  const res = await fetch(`${SANDBOX}/v2/checkout/orders/${orderId}/capture`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Capture failed: ${t}`);
  }
  return res.json();
}
