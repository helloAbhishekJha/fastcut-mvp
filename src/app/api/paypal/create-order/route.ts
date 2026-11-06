import { NextResponse } from "next/server";
import { flags } from "@/lib/flags";
import { createHdUnlockOrder, getPayPalAccessToken } from "@/lib/paypal";

export async function POST() {
  if (flags.demoMode) {
    return NextResponse.json({
      demo: true,
      id: "DEMO-ORDER",
      status: "COMPLETED",
    });
  }
  if (!flags.enablePaypal) {
    return NextResponse.json(
      { error: "PayPal disabled (ENABLE_PAYPAL=false)" },
      { status: 503 },
    );
  }
  try {
    const token = await getPayPalAccessToken();
    const order = await createHdUnlockOrder(token);
    return NextResponse.json({ id: order.id, status: order.status });
  } catch (e) {
    const message = e instanceof Error ? e.message : "PayPal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
