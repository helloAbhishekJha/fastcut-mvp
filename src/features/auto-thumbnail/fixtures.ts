import type { ThumbnailAspect, ThumbnailPick } from "./types";

/** Top-3 frame picks (demo scores). */
export const DEMO_THUMBNAIL_PICKS: ThumbnailPick[] = [
  { t: 1.4, score: 94, note: "Strong eye contact" },
  { t: 11.2, score: 89, note: "Gesture peak" },
  { t: 28.6, score: 86, note: "Product in frame" },
];

export function thumbnailDimensions(aspect: ThumbnailAspect): { w: number; h: number } {
  return aspect === "9:16" ? { w: 1080, h: 1920 } : { w: 1080, h: 1080 };
}
