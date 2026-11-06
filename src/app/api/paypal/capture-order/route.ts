import { NextRequest, NextResponse } from "next/server";
import { flags } from "@/lib/flags";
import { captureOrder, getPayPalAccessToken } from "@/lib/paypal";

export async function POST(req: NextRequest) {
  const body = (await req.json()) as { orderId?: string };
  const orderId = body.orderId;
  if (!orderId) {
    return NextResponse.json({ error: "orderId required" }, { status: 400 });
  }
  if (flags.demoMode || orderId === "DEMO-ORDER") {
    return NextResponse.json({ status: "COMPLETED", demo: true });
  }
  if (!flags.enablePaypal) {
    return NextResponse.json({ error: "PayPal disabled" }, { status: 503 });
  }
  try {
    const token = await getPayPalAccessToken();
    const result = await captureOrder(token, orderId);
    return NextResponse.json(result);
  } catch (e) {
    const message = e instanceof Error ? e.message : "Capture failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
