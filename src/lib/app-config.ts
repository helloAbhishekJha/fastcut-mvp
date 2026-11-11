import type { AiFeatureDefinition } from "@/lib/ai-feature-definitions";

export type InfraConfig = {
  demoMode: boolean;
  enablePaypal: boolean;
  enableOpenai: boolean;
  enableFfmpeg: boolean;
  enableHdExport: boolean;
  showDevHints: boolean;
  paypalClientId: string | null;
};

export type AiFlagsConfig = {
  enableAutoCaptions: boolean;
  enableKaraokeCaptions: boolean;
  enableCaptionEmojis: boolean;
  enableHashtagSuggestions: boolean;
  enableMultilangSubtitles: boolean;
  enableBrollUnderFace: boolean;
  enableStockBroll: boolean;
  enableGifInserts: boolean;
  enableAiHooks: boolean;
  enableScriptRewrite: boolean;
  enableCtaLines: boolean;
  enableEndCardCta: boolean;
  enableTrimSilence: boolean;
  enableFillerWordRemoval: boolean;
  enableVoiceDenoise: boolean;
  enableAudioNormalize: boolean;
  enableReelsPreset: boolean;
  enableTiktokPreset: boolean;
  enableShortsPreset: boolean;
  enableLinkedinSquarePreset: boolean;
  enableYoutubeLandscapePreset: boolean;
  enableSmartReframe: boolean;
  enableBackgroundBlur: boolean;
  enableBackgroundRemove: boolean;
  enableAutoChapters: boolean;
  enableViralMoments: boolean;
  enableBeatSyncMarkers: boolean;
  enablePunchInZoom: boolean;
  enableColorGradeLut: boolean;
  enableLowerThirds: boolean;
  enableBrandTemplate: boolean;
  enableAutoThumbnail: boolean;
  enableIntroOutroBumper: boolean;
  enableTimelineTrim: boolean;
};

export type AppConfig = InfraConfig &
  AiFlagsConfig & {
    aiFeatureCatalog?: AiFeatureDefinition[];
  };

export function defaultAppConfigFallback(): AppConfig {
  return {
    demoMode: true,
    enablePaypal: false,
    enableOpenai: false,
    enableFfmpeg: false,
    enableHdExport: true,
    showDevHints: process.env.NODE_ENV === "development",
    paypalClientId: null,
    enableAutoCaptions: true,
    enableKaraokeCaptions: true,
    enableCaptionEmojis: true,
    enableHashtagSuggestions: true,
    enableMultilangSubtitles: true,
    enableBrollUnderFace: true,
    enableStockBroll: true,
    enableGifInserts: true,
    enableAiHooks: true,
    enableScriptRewrite: true,
    enableCtaLines: true,
    enableEndCardCta: true,
    enableTrimSilence: true,
    enableFillerWordRemoval: true,
    enableVoiceDenoise: true,
    enableAudioNormalize: true,
    enableReelsPreset: true,
    enableTiktokPreset: true,
    enableShortsPreset: true,
    enableLinkedinSquarePreset: true,
    enableYoutubeLandscapePreset: true,
    enableSmartReframe: true,
    enableBackgroundBlur: true,
    enableBackgroundRemove: true,
    enableAutoChapters: true,
    enableViralMoments: true,
    enableBeatSyncMarkers: true,
    enablePunchInZoom: true,
    enableColorGradeLut: true,
    enableLowerThirds: true,
    enableBrandTemplate: true,
    enableAutoThumbnail: true,
    enableIntroOutroBumper: true,
    enableTimelineTrim: true,
  };
}

export type StudioPayload = {
  source: string;
  captions: { start: number; end: number; text: string }[];
  hooks: string[];
  hashtags: string[];
  karaokeLine: string | null;
  karaokeWords?: string[];
  scriptRewrite: string | null;
  ctaLines: string[];
  endCard: { headline: string; button: string } | null;
  stockBroll: typeof import("@/lib/fixtures/studio").STUDIO_STOCK_BROLL;
  gifInserts: typeof import("@/lib/fixtures/studio").STUDIO_GIF_INSERTS;
  chapters: typeof import("@/lib/fixtures/studio").STUDIO_CHAPTERS;
  viralMoments: import("@/features/viral-moments").ViralMomentClip[];
  viralMomentsSource?: "fixture" | "brief-heuristic" | null;
  beatMarkers: number[];
  punchZooms: typeof import("@/lib/fixtures/studio").STUDIO_PUNCH_ZOOMS;
  fillerCuts: typeof import("@/lib/fixtures/studio").STUDIO_FILLER_CUTS;
  lutPresets: string[];
  lowerThird: typeof import("@/lib/fixtures/studio").STUDIO_LOWER_THIRD | null;
  brand: typeof import("@/lib/fixtures/studio").STUDIO_BRAND | null;
  thumbnails: typeof import("@/lib/fixtures/studio").STUDIO_THUMBNAILS;
  bumpers: typeof import("@/lib/fixtures/studio").STUDIO_BUMPERS;
  subtitleLangs: string[];
  audioPasses: string[];
};
