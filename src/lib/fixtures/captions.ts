export const DEMO_CAPTIONS = [
  { start: 0, end: 2.5, text: "Stop scrolling — this hook hits in 3 seconds." },
  { start: 2.5, end: 5, text: "AI trimmed the dead air so you stay on beat." },
  { start: 5, end: 8, text: "Reels 9:16 preset ready for TikTok & Instagram." },
  { start: 8, end: 11, text: "Export HD when you're ready to ship." },
];

export const DEMO_HOOKS = [
  "POV: you finally edited a reel in one coffee break",
  "The silence trimmer saved me 47 awkward seconds",
  "Caption this before your competitor does",
];

export function captionsFromBrief(brief: string) {
  const hook = brief.trim() || "your clip";
  return [
    { start: 0, end: 3, text: `Hook: ${hook.slice(0, 80)}` },
    { start: 3, end: 6, text: "Middle beat — keep energy high here." },
    { start: 6, end: 9, text: "CTA: follow for part 2" },
  ];
}
