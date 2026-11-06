import { NextRequest, NextResponse } from "next/server";
import { flags } from "@/lib/flags";
import {
  DEMO_CAPTIONS,
  DEMO_HOOKS,
  captionsFromBrief,
} from "@/lib/fixtures/captions";

export async function POST(req: NextRequest) {
  const { brief = "" } = (await req.json()) as { brief?: string };

  if (!flags.enableOpenai || !process.env.OPENAI_API_KEY) {
    return NextResponse.json({
      source: "fixture",
      captions: brief.trim() ? captionsFromBrief(brief) : DEMO_CAPTIONS,
      hooks: DEMO_HOOKS,
    });
  }

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "Return JSON: { hooks: string[3], captions: {start,end,text}[] } for short-form video. Times in seconds, 3-4 caption lines.",
          },
          {
            role: "user",
            content: `Brief: ${brief || "energetic product teaser"}`,
          },
        ],
        response_format: { type: "json_object" },
      }),
    });
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const data = (await res.json()) as {
      choices: { message: { content: string } }[];
    };
    const parsed = JSON.parse(data.choices[0].message.content) as {
      hooks?: string[];
      captions?: { start: number; end: number; text: string }[];
    };
    return NextResponse.json({
      source: "openai",
      hooks: parsed.hooks ?? DEMO_HOOKS,
      captions: parsed.captions ?? DEMO_CAPTIONS,
    });
  } catch {
    return NextResponse.json({
      source: "fixture-fallback",
      captions: captionsFromBrief(brief),
      hooks: DEMO_HOOKS,
    });
  }
}
