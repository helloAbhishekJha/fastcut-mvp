import { NextResponse } from "next/server";
import { publicFeatureFlags } from "@/lib/feature-flags";

export async function GET() {
  return NextResponse.json({
    ...publicFeatureFlags(),
    paypalClientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? null,
  });
}
