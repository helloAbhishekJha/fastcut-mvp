/** Parse boolean env vars (`true` / `1`); empty → default. */
export function envFlag(name: string, defaultValue = false): boolean {
  const v = process.env[name];
  if (v === undefined || v === "") return defaultValue;
  return v === "true" || v === "1";
}

export const featureFlags = {
  demoMode: envFlag("NEXT_PUBLIC_DEMO_MODE", true),
  enablePaypal: envFlag("ENABLE_PAYPAL", false),
  enableOpenai: envFlag("ENABLE_OPENAI", false),
  enableFfmpeg: envFlag("ENABLE_FFMPEG", false),
  enableHdExport: envFlag("ENABLE_HD_EXPORT", true),
  enableAutoCaptions: envFlag("ENABLE_AUTO_CAPTIONS", true),
  enableCaptionEmojis: envFlag("ENABLE_CAPTION_EMOJIS", true),
  enableBrollUnderFace: envFlag("ENABLE_BROLL_UNDER_FACE", true),
  enableAiHooks: envFlag("ENABLE_AI_HOOKS", true),
  enableTrimSilence: envFlag("ENABLE_TRIM_SILENCE", true),
  enableReelsPreset: envFlag("ENABLE_REELS_PRESET", true),
} as const;

export type PublicFeatureFlags = {
  demoMode: boolean;
  enablePaypal: boolean;
  enableOpenai: boolean;
  enableFfmpeg: boolean;
  enableHdExport: boolean;
  enableAutoCaptions: boolean;
  enableCaptionEmojis: boolean;
  enableBrollUnderFace: boolean;
  enableAiHooks: boolean;
  enableTrimSilence: boolean;
  enableReelsPreset: boolean;
  /** True in local dev — client may show subtle env-disable hints. */
  showDevHints: boolean;
};

export function publicFeatureFlags(): PublicFeatureFlags {
  return {
    ...featureFlags,
    showDevHints: process.env.NODE_ENV === "development",
  };
}
