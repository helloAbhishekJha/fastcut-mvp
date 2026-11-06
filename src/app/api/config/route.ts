import { NextResponse } from "next/server";
import { publicFlags } from "@/lib/flags";

export async function GET() {
  return NextResponse.json({
    ...publicFlags(),
    paypalClientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? null,
  });
}
