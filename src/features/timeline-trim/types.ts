/** In/out trim range in seconds (preview-only; no export burn-in). */
export type TimelineTrimRange = {
  inPoint: number;
  outPoint: number;
};

export const DEFAULT_TIMELINE_TRIM: TimelineTrimRange = {
  inPoint: 0,
  outPoint: 0,
};

export const MIN_TRIM_GAP_SEC = 0.25;

export function clampTimelineTrim(
  range: TimelineTrimRange,
  duration: number,
): TimelineTrimRange {
  const d = Math.max(0, duration);
  if (d <= 0) return { inPoint: 0, outPoint: 0 };

  let inPoint = Math.min(Math.max(0, range.inPoint), d);
  let outPoint = Math.min(Math.max(0, range.outPoint), d);

  if (outPoint - inPoint < MIN_TRIM_GAP_SEC) {
    outPoint = Math.min(d, inPoint + MIN_TRIM_GAP_SEC);
    if (outPoint - inPoint < MIN_TRIM_GAP_SEC) {
      inPoint = Math.max(0, outPoint - MIN_TRIM_GAP_SEC);
    }
  }

  if (outPoint < inPoint) {
    [inPoint, outPoint] = [outPoint, inPoint];
  }

  return { inPoint, outPoint };
}

export function formatTimelineTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  const ms = Math.floor((seconds % 1) * 10);
  return ms > 0 ? `${m}:${s.toString().padStart(2, "0")}.${ms}` : `${m}:${s.toString().padStart(2, "0")}`;
}
