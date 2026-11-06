import {
  AI_FEATURE_DEFINITIONS,
  type AiFeatureFlagsMap,
} from "@/lib/ai-feature-definitions";

/** Parse boolean env vars (`true` / `1`); empty → default. */
export function envFlag(name: string, defaultValue = false): boolean {
  const v = process.env[name];
  if (v === undefined || v === "") return defaultValue;
  return v === "true" || v === "1";
}

const infraFlags = {
  demoMode: envFlag("NEXT_PUBLIC_DEMO_MODE", true),
  enablePaypal: envFlag("ENABLE_PAYPAL", false),
  enableOpenai: envFlag("ENABLE_OPENAI", false),
  enableFfmpeg: envFlag("ENABLE_FFMPEG", false),
  enableHdExport: envFlag("ENABLE_HD_EXPORT", true),
};

function buildAiFlags(): AiFeatureFlagsMap {
  const out = {} as AiFeatureFlagsMap;
  for (const def of AI_FEATURE_DEFINITIONS) {
    out[def.configKey as keyof AiFeatureFlagsMap] = envFlag(
      def.env,
      def.defaultEnabled,
    );
  }
  return out;
}

export const aiFeatureFlags = buildAiFlags();

export type InfraFlags = typeof infraFlags;
export type FeatureFlags = InfraFlags & AiFeatureFlagsMap;

export const featureFlags: FeatureFlags = {
  ...infraFlags,
  ...aiFeatureFlags,
};

export type PublicFeatureFlags = FeatureFlags & {
  showDevHints: boolean;
};

export type PublicConfigResponse = PublicFeatureFlags & {
  aiFeatureCatalog: typeof AI_FEATURE_DEFINITIONS;
};

export function publicFeatureFlags(): PublicConfigResponse {
  return {
    ...featureFlags,
    showDevHints: process.env.NODE_ENV === "development",
    aiFeatureCatalog: AI_FEATURE_DEFINITIONS,
  } as PublicConfigResponse;
}

export function isAiFeatureEnabled(configKey: keyof AiFeatureFlagsMap): boolean {
  return featureFlags[configKey];
}
