export function flag(name: string, defaultValue = false): boolean {
  const v = process.env[name];
  if (v === undefined || v === "") return defaultValue;
  return v === "true" || v === "1";
}

export const flags = {
  demoMode: flag("NEXT_PUBLIC_DEMO_MODE", true),
  enablePaypal: flag("ENABLE_PAYPAL", false),
  enableOpenai: flag("ENABLE_OPENAI", false),
  enableFfmpeg: flag("ENABLE_FFMPEG", false),
  enableHdExport: flag("ENABLE_HD_EXPORT", true),
} as const;

export function publicFlags() {
  return {
    demoMode: flags.demoMode,
    enablePaypal: flags.enablePaypal,
    enableOpenai: flags.enableOpenai,
    enableFfmpeg: flags.enableFfmpeg,
    enableHdExport: flags.enableHdExport,
  };
}
