import type { ViralMomentClip } from "@/features/viral-moments/types";

/** Default ClipFlow-style windows when brief is empty (demo sample ~48s). */
export const VIRAL_MOMENTS_FIXTURE: ViralMomentClip[] = [
  {
    start: 3.2,
    end: 7.8,
    score: 92,
    label: "Pattern interrupt",
    platform: "Reels",
  },
  {
    start: 18.5,
    end: 24.1,
    score: 88,
    label: "Payoff line",
    platform: "Shorts",
  },
  {
    start: 41.0,
    end: 45.5,
    score: 85,
    label: "Shareable quote",
    platform: "TikTok",
  },
];
