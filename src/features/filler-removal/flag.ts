import { envFlag } from "@/lib/feature-flags";

/** Env gate for filler-word removal (MakeMyClip-style um/like cuts). */
export const ENABLE_FILLER_WORD_REMOVAL = "ENABLE_FILLER_WORD_REMOVAL";
export const CONFIG_KEY = "enableFillerWordRemoval" as const;

export function isFillerWordRemovalEnabled(): boolean {
  return envFlag(ENABLE_FILLER_WORD_REMOVAL, true);
}
