export type AiFeatureCategory =
  | "Captions & text"
  | "B-roll & visuals"
  | "Script & hooks"
  | "Audio cleanup"
  | "Platform & framing"
  | "Smart video"
  | "Brand & export";

export type AiFeatureDefinition = {
  env: string;
  configKey: string;
  label: string;
  description: string;
  category: AiFeatureCategory;
  defaultEnabled: boolean;
};

/** AI editing capabilities — each gated by ENABLE_* in .env */
export const AI_FEATURE_DEFINITIONS: AiFeatureDefinition[] = [
  {
    env: "ENABLE_AUTO_CAPTIONS",
    configKey: "enableAutoCaptions",
    label: "Auto captions",
    description: "Speech-to-text caption lines with timing",
    category: "Captions & text",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_KARAOKE_CAPTIONS",
    configKey: "enableKaraokeCaptions",
    label: "Karaoke highlight",
    description: "Word-by-word caption highlight (stub preview)",
    category: "Captions & text",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_CAPTION_EMOJIS",
    configKey: "enableCaptionEmojis",
    label: "Caption emojis",
    description: "Emoji decoration on caption lines",
    category: "Captions & text",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_HASHTAG_SUGGESTIONS",
    configKey: "enableHashtagSuggestions",
    label: "Hashtag suggestions",
    description: "Platform-ready hashtag sets from brief",
    category: "Captions & text",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_MULTILANG_SUBTITLES",
    configKey: "enableMultilangSubtitles",
    label: "Multi-language subtitles",
    description: "Extra subtitle tracks (stub)",
    category: "Captions & text",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_BROLL_UNDER_FACE",
    configKey: "enableBrollUnderFace",
    label: "B-roll under face",
    description: "Filler b-roll below speaker",
    category: "B-roll & visuals",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_STOCK_BROLL",
    configKey: "enableStockBroll",
    label: "Stock b-roll slots",
    description: "Suggested stock clip timestamps",
    category: "B-roll & visuals",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_GIF_INSERTS",
    configKey: "enableGifInserts",
    label: "GIF inserts",
    description: "Reaction GIF beat markers",
    category: "B-roll & visuals",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_AI_HOOKS",
    configKey: "enableAiHooks",
    label: "AI hooks",
    description: "Scroll-stopping opener lines",
    category: "Script & hooks",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_SCRIPT_REWRITE",
    configKey: "enableScriptRewrite",
    label: "Script rewrite",
    description: "Tighter spoken script variant",
    category: "Script & hooks",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_CTA_LINES",
    configKey: "enableCtaLines",
    label: "CTA lines",
    description: "Call-to-action copy suggestions",
    category: "Script & hooks",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_END_CARD_CTA",
    configKey: "enableEndCardCta",
    label: "End-card CTA",
    description: "Closing card generator copy",
    category: "Script & hooks",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_TRIM_SILENCE",
    configKey: "enableTrimSilence",
    label: "Trim silence",
    description: "Remove dead air between beats",
    category: "Audio cleanup",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_FILLER_WORD_REMOVAL",
    configKey: "enableFillerWordRemoval",
    label: "Filler-word removal",
    description: "Detect um/uh/like cuts (simulated)",
    category: "Audio cleanup",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_VOICE_DENOISE",
    configKey: "enableVoiceDenoise",
    label: "Voice denoise",
    description: "Background noise reduction pass",
    category: "Audio cleanup",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_AUDIO_NORMALIZE",
    configKey: "enableAudioNormalize",
    label: "Audio normalize",
    description: "LUFS leveling (simulated)",
    category: "Audio cleanup",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_REELS_PRESET",
    configKey: "enableReelsPreset",
    label: "Reels 9:16",
    description: "Instagram Reels framing",
    category: "Platform & framing",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_TIKTOK_PRESET",
    configKey: "enableTiktokPreset",
    label: "TikTok vertical",
    description: "TikTok-safe margins",
    category: "Platform & framing",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_SHORTS_PRESET",
    configKey: "enableShortsPreset",
    label: "YouTube Shorts",
    description: "Shorts title-safe overlay",
    category: "Platform & framing",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_LINKEDIN_SQUARE_PRESET",
    configKey: "enableLinkedinSquarePreset",
    label: "LinkedIn square",
    description: "1:1 feed crop",
    category: "Platform & framing",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_YOUTUBE_LANDSCAPE_PRESET",
    configKey: "enableYoutubeLandscapePreset",
    label: "YouTube 16:9",
    description: "Landscape publish preset",
    category: "Platform & framing",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_SMART_REFRAME",
    configKey: "enableSmartReframe",
    label: "Smart reframe",
    description: "Speaker tracking crop (simulated)",
    category: "Smart video",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_BACKGROUND_BLUR",
    configKey: "enableBackgroundBlur",
    label: "Background blur",
    description: "Portrait blur behind subject",
    category: "Smart video",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_BACKGROUND_REMOVE",
    configKey: "enableBackgroundRemove",
    label: "Background remove",
    description: "Cutout subject (simulated)",
    category: "Smart video",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_AUTO_CHAPTERS",
    configKey: "enableAutoChapters",
    label: "Auto chapters",
    description: "Chapter markers from transcript",
    category: "Smart video",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_VIRAL_MOMENTS",
    configKey: "enableViralMoments",
    label: "Viral moments",
    description: "Highlight peaks for clips",
    category: "Smart video",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_BEAT_SYNC_MARKERS",
    configKey: "enableBeatSyncMarkers",
    label: "Beat-sync cuts",
    description: "Cut points on music beats",
    category: "Smart video",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_PUNCH_IN_ZOOM",
    configKey: "enablePunchInZoom",
    label: "Punch-in zoom",
    description: "Emphasis zoom on keywords",
    category: "Smart video",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_COLOR_GRADE_LUT",
    configKey: "enableColorGradeLut",
    label: "Color grade / LUT",
    description: "One-click look presets",
    category: "Brand & export",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_LOWER_THIRDS",
    configKey: "enableLowerThirds",
    label: "Lower thirds",
    description: "Name/title overlays",
    category: "Brand & export",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_BRAND_TEMPLATE",
    configKey: "enableBrandTemplate",
    label: "Brand template",
    description: "Logo-safe frame overlay",
    category: "Brand & export",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_AUTO_THUMBNAIL",
    configKey: "enableAutoThumbnail",
    label: "Auto thumbnail",
    description: "Pick best 3 frames",
    category: "Brand & export",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_INTRO_OUTRO_BUMPER",
    configKey: "enableIntroOutroBumper",
    label: "Intro/outro bumpers",
    description: "Template open/close stingers",
    category: "Brand & export",
    defaultEnabled: true,
  },
  {
    env: "ENABLE_TIMELINE_TRIM",
    configKey: "enableTimelineTrim",
    label: "Timeline trim",
    description: "In/out markers and scrub bar on export (preview)",
    category: "Brand & export",
    defaultEnabled: true,
  },
];

export type PlatformPresetId =
  | "reels"
  | "tiktok"
  | "shorts"
  | "linkedin"
  | "youtube"
  | "original";

export const PLATFORM_PRESETS: {
  id: PlatformPresetId;
  label: string;
  aspect: string;
  configKey: keyof AiFeatureFlagsMap | null;
}[] = [
  { id: "reels", label: "Reels 9:16", aspect: "9/16", configKey: "enableReelsPreset" },
  { id: "tiktok", label: "TikTok", aspect: "9/16", configKey: "enableTiktokPreset" },
  { id: "shorts", label: "Shorts", aspect: "9/16", configKey: "enableShortsPreset" },
  {
    id: "linkedin",
    label: "LinkedIn □",
    aspect: "1/1",
    configKey: "enableLinkedinSquarePreset",
  },
  {
    id: "youtube",
    label: "YouTube 16:9",
    aspect: "16/9",
    configKey: "enableYoutubeLandscapePreset",
  },
  { id: "original", label: "Original", aspect: "auto", configKey: null },
];

export type AiFeatureFlagsMap = Record<
  (typeof AI_FEATURE_DEFINITIONS)[number]["configKey"],
  boolean
>;
