import { envFlag } from "@/lib/feature-flags";

/** Env gate for trim-silence (Clipwright-style dead-air cuts). */
export const ENABLE_TRIM_SILENCE = "ENABLE_TRIM_SILENCE";
export const CONFIG_KEY = "enableTrimSilence" as const;

export function isTrimSilenceEnabled(): boolean {
  return envFlag(ENABLE_TRIM_SILENCE, true);
}

export const TRIM_SILENCE_SIMULATED_MESSAGE =
  "Silence trim simulated (set ENABLE_FFMPEG=true for real processing).";
