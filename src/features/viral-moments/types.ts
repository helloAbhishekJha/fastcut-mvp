export type ViralMomentPlatform = "Reels" | "Shorts" | "TikTok";

export type ViralMomentClip = {
  start: number;
  end: number;
  score: number;
  label: string;
  platform: ViralMomentPlatform;
};

export type ViralMomentsPipelineResult = {
  clips: ViralMomentClip[];
  source: "fixture" | "brief-heuristic";
};
