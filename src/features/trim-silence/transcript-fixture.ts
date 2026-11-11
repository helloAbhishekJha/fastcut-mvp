export type TranscriptWord = {
  start: number;
  end: number;
  text: string;
};

export type TranscriptSegment = {
  start: number;
  end: number;
  text: string;
};

/**
 * Word-timed demo transcript for cut-list UI (no FFmpeg).
 * Aligns with bundled sample pacing and filler timestamps.
 */
export const DEMO_TRANSCRIPT_WORDS: TranscriptWord[] = [
  { start: 0.0, end: 0.45, text: "Stop" },
  { start: 0.45, end: 0.95, text: "scrolling" },
  { start: 0.95, end: 1.35, text: "—" },
  { start: 1.35, end: 1.75, text: "this" },
  { start: 1.75, end: 2.15, text: "hook" },
  { start: 2.15, end: 2.5, text: "lands" },
  { start: 3.1, end: 3.45, text: "AI" },
  { start: 3.45, end: 3.85, text: "trimmed" },
  { start: 3.85, end: 4.1, text: "the" },
  { start: 4.1, end: 4.45, text: "dead" },
  { start: 4.45, end: 4.85, text: "air" },
  { start: 5.1, end: 5.4, text: "um" },
  { start: 5.55, end: 5.95, text: "so" },
  { start: 5.95, end: 6.25, text: "you" },
  { start: 6.25, end: 6.55, text: "stay" },
  { start: 6.55, end: 6.95, text: "on" },
  { start: 6.95, end: 7.3, text: "beat" },
  { start: 8.0, end: 8.45, text: "Reels" },
  { start: 8.45, end: 9.1, text: "9:16" },
  { start: 9.1, end: 9.55, text: "preset" },
  { start: 9.55, end: 10.0, text: "ready" },
  { start: 10.35, end: 10.65, text: "for" },
  { start: 10.65, end: 11.05, text: "TikTok" },
  { start: 11.45, end: 11.95, text: "and" },
  { start: 11.95, end: 12.55, text: "Instagram" },
  { start: 13.2, end: 13.55, text: "Export" },
  { start: 13.55, end: 13.95, text: "HD" },
  { start: 14.2, end: 14.55, text: "when" },
  { start: 14.55, end: 14.75, text: "you're" },
  { start: 14.8, end: 15.1, text: "like" },
  { start: 15.25, end: 15.55, text: "ready" },
  { start: 15.55, end: 15.85, text: "to" },
  { start: 15.85, end: 16.2, text: "ship" },
];

export const DEMO_TRANSCRIPT_SEGMENTS: TranscriptSegment[] = [
  {
    start: 0,
    end: 2.5,
    text: "Stop scrolling — this hook lands",
  },
  {
    start: 3.1,
    end: 7.3,
    text: "AI trimmed the dead air um so you stay on beat",
  },
  {
    start: 8.0,
    end: 12.55,
    text: "Reels 9:16 preset ready for TikTok and Instagram",
  },
  {
    start: 13.2,
    end: 16.2,
    text: "Export HD when you're like ready to ship",
  },
];
