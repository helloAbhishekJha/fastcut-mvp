import type { PlatformPresetId } from "@/lib/ai-feature-definitions";

export function studioHashtags(brief: string) {
  const tag = brief.trim().split(/\s+/)[0]?.toLowerCase().replace(/[^a-z0-9]/g, "") || "launch";
  return [`#${tag}`, "#contentcreator", "#reels", "#aiedited", "#fastcut"];
}

export const STUDIO_STOCK_BROLL = [
  { at: 2.1, query: "city timelapse", duration: 1.8 },
  { at: 6.4, query: "hands typing laptop", duration: 2.0 },
  { at: 10.2, query: "team high-five", duration: 1.5 },
];

export const STUDIO_GIF_INSERTS = [
  { at: 4.5, label: "mind blown GIF" },
  { at: 9.0, label: "let's go GIF" },
];

export const STUDIO_CHAPTERS = [
  { start: 0, title: "Cold open hook" },
  { start: 8, title: "Problem / pain" },
  { start: 22, title: "Product reveal" },
  { start: 38, title: "CTA" },
];

export const STUDIO_VIRAL_MOMENTS = [
  { start: 3.2, end: 7.8, score: 92, label: "Pattern interrupt" },
  { start: 18.5, end: 24.1, score: 88, label: "Payoff line" },
  { start: 41.0, end: 45.5, score: 85, label: "Shareable quote" },
];

export const STUDIO_BEAT_MARKERS = [0, 1.2, 2.4, 3.6, 4.8, 6.0, 7.2, 8.4];

export const STUDIO_PUNCH_ZOOMS = [
  { at: 2.8, word: "stop scrolling" },
  { at: 12.4, word: "free trial" },
];

export const STUDIO_LUT_PRESETS = ["Clean tech", "Warm creator", "High contrast viral"];

export const STUDIO_LOWER_THIRD = {
  name: "Alex Chen",
  title: "Founder · Demo Co",
};

export const STUDIO_BRAND = {
  primary: "#7C3AED",
  logoPlacement: "top-right safe zone",
};

export { DEMO_THUMBNAIL_PICKS as STUDIO_THUMBNAILS } from "@/features/auto-thumbnail/fixtures";

export const STUDIO_BUMPERS = [
  { type: "intro" as const, name: "Pulse sting (2s)" },
  { type: "outro" as const, name: "Logo fade (3s)" },
];

export const STUDIO_SUBTITLE_LANGS = ["en", "es", "hi"];

export { DEMO_END_CARD as STUDIO_END_CARD } from "@/features/end-card/fixtures";

export function studioScriptRewrite(brief: string) {
  const topic = brief.trim() || "your offer";
  return `Here's the truth about ${topic.slice(0, 60)} — and the one move most creators skip. Watch till the end.`;
}

export const STUDIO_CTA_LINES = [
  "Comment READY for the checklist",
  "Save this before your next shoot",
  "DM me START for the template",
];

export const STUDIO_FILLER_CUTS = [
  { start: 5.1, end: 5.4, word: "um" },
  { start: 14.8, end: 15.1, word: "like" },
];

export function karaokeWords(text: string) {
  return text.split(/\s+/).filter(Boolean);
}

export function presetAspectClass(preset: PlatformPresetId): string {
  switch (preset) {
    case "reels":
    case "tiktok":
    case "shorts":
      return "aspect-[9/16] max-h-[420px]";
    case "linkedin":
      return "aspect-square max-h-[380px]";
    case "youtube":
      return "aspect-video max-h-[360px]";
    default:
      return "aspect-video max-h-[360px]";
  }
}
