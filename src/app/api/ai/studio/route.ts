import { NextRequest, NextResponse } from "next/server";
import { featureFlags } from "@/lib/feature-flags";
import {
  DEMO_CAPTIONS,
  DEMO_HOOKS,
  captionsFromBrief,
} from "@/lib/fixtures/captions";
import { stripCaptionEmojis, withCaptionEmojis } from "@/lib/caption-format";
import {
  STUDIO_BEAT_MARKERS,
  STUDIO_BRAND,
  STUDIO_BUMPERS,
  STUDIO_CHAPTERS,
  STUDIO_CTA_LINES,
  STUDIO_END_CARD,
  STUDIO_FILLER_CUTS,
  STUDIO_GIF_INSERTS,
  STUDIO_LOWER_THIRD,
  STUDIO_LUT_PRESETS,
  STUDIO_PUNCH_ZOOMS,
  STUDIO_STOCK_BROLL,
  STUDIO_SUBTITLE_LANGS,
  STUDIO_THUMBNAILS,
  STUDIO_VIRAL_MOMENTS,
  karaokeWords,
  studioHashtags,
  studioScriptRewrite,
} from "@/lib/fixtures/studio";

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

export async function POST(req: NextRequest) {
  const { brief = "" } = (await req.json()) as { brief?: string };
  const captionsRaw = brief.trim() ? captionsFromBrief(brief) : DEMO_CAPTIONS;
  const captions = formatCaptions(captionsRaw);
  const firstLine = captions[0]?.text ?? "Your hook lands here";

  const audioPasses: string[] = [];
  if (featureFlags.enableVoiceDenoise) audioPasses.push("denoise");
  if (featureFlags.enableAudioNormalize) audioPasses.push("normalize");

  return NextResponse.json({
    source: featureFlags.enableOpenai ? "openai-or-fixture" : "fixture",
    captions,
    hooks: featureFlags.enableAiHooks ? DEMO_HOOKS : [],
    hashtags: featureFlags.enableHashtagSuggestions
      ? studioHashtags(brief)
      : [],
    karaokeLine: featureFlags.enableKaraokeCaptions ? firstLine : null,
    karaokeWords: featureFlags.enableKaraokeCaptions
      ? karaokeWords(firstLine)
      : [],
    scriptRewrite: featureFlags.enableScriptRewrite
      ? studioScriptRewrite(brief)
      : null,
    ctaLines: featureFlags.enableCtaLines ? STUDIO_CTA_LINES : [],
    endCard: featureFlags.enableEndCardCta ? STUDIO_END_CARD : null,
    stockBroll: featureFlags.enableStockBroll ? STUDIO_STOCK_BROLL : [],
    gifInserts: featureFlags.enableGifInserts ? STUDIO_GIF_INSERTS : [],
    chapters: featureFlags.enableAutoChapters ? STUDIO_CHAPTERS : [],
    viralMoments: featureFlags.enableViralMoments ? STUDIO_VIRAL_MOMENTS : [],
    beatMarkers: featureFlags.enableBeatSyncMarkers ? STUDIO_BEAT_MARKERS : [],
    punchZooms: featureFlags.enablePunchInZoom ? STUDIO_PUNCH_ZOOMS : [],
    fillerCuts: featureFlags.enableFillerWordRemoval ? STUDIO_FILLER_CUTS : [],
    lutPresets: featureFlags.enableColorGradeLut ? STUDIO_LUT_PRESETS : [],
    lowerThird: featureFlags.enableLowerThirds ? STUDIO_LOWER_THIRD : null,
    brand: featureFlags.enableBrandTemplate ? STUDIO_BRAND : null,
    thumbnails: featureFlags.enableAutoThumbnail ? STUDIO_THUMBNAILS : [],
    bumpers: featureFlags.enableIntroOutroBumper ? STUDIO_BUMPERS : [],
    subtitleLangs: featureFlags.enableMultilangSubtitles
      ? STUDIO_SUBTITLE_LANGS
      : [],
    audioPasses,
    smartReframe: featureFlags.enableSmartReframe,
    backgroundBlur: featureFlags.enableBackgroundBlur,
    backgroundRemove: featureFlags.enableBackgroundRemove,
  });
}
