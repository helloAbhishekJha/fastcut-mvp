import { NextRequest, NextResponse } from "next/server";
import { featureFlags } from "@/lib/feature-flags";
import {
  DEMO_CAPTIONS,
  DEMO_HOOKS,
  captionsFromBrief,
} from "@/lib/fixtures/captions";
import { stripCaptionEmojis, withCaptionEmojis } from "@/lib/caption-format";

type Caption = { start: number; end: number; text: string };

function formatCaptions(raw: Caption[]): Caption[] {
  if (!featureFlags.enableAutoCaptions) return [];
  return raw.map((c, i) => {
    let text = c.text;
    if (featureFlags.enableCaptionEmojis) {
      text = withCaptionEmojis(text, i);
    } else {
      text = stripCaptionEmojis(text);
    }
    return { ...c, text };
  });
}

function formatHooks(raw: string[]): string[] {
  if (!featureFlags.enableAiHooks) return [];
  return raw;
}

export async function POST(req: NextRequest) {
  if (!featureFlags.enableAutoCaptions && !featureFlags.enableAiHooks) {
    return NextResponse.json({
      source: "disabled",
      captions: [],
      hooks: [],
    });
  }

  const { brief = "" } = (await req.json()) as { brief?: string };

  if (!featureFlags.enableOpenai || !process.env.OPENAI_API_KEY) {
    const captions = brief.trim() ? captionsFromBrief(brief) : DEMO_CAPTIONS;
    return NextResponse.json({
      source: "fixture",
      captions: formatCaptions(captions),
      hooks: formatHooks(DEMO_HOOKS),
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
      captions?: Caption[];
    };
    return NextResponse.json({
      source: "openai",
      hooks: formatHooks(parsed.hooks ?? DEMO_HOOKS),
      captions: formatCaptions(parsed.captions ?? DEMO_CAPTIONS),
    });
  } catch {
    return NextResponse.json({
      source: "fixture-fallback",
      captions: formatCaptions(captionsFromBrief(brief)),
      hooks: formatHooks(DEMO_HOOKS),
    });
  }
}
