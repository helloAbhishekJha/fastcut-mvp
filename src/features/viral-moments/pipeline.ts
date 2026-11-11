import { runViralMomentsPipeline } from "@/features/viral-moments/detect";
import type { ViralMomentsPipelineResult } from "@/features/viral-moments/types";

/** Studio / API hook: call only when ENABLE_VIRAL_MOMENTS is on. */
export function viralMomentsForBrief(brief: string): ViralMomentsPipelineResult {
  return runViralMomentsPipeline(brief);
}
