import { DEFAULT_FOCUS, PUNCH_ZOOM_WINDOW_SEC } from "./constants";
import type { PunchZoomMarker, StudioPunchZoom } from "./types";

export function studioPunchZoomsToMarkers(
  rows: StudioPunchZoom[] | undefined,
): PunchZoomMarker[] {
  if (!rows?.length) return [];
  return rows.map((row, i) => ({
    id: `studio-${row.at}-${i}`,
    at: row.at,
    x: DEFAULT_FOCUS.x,
    y: DEFAULT_FOCUS.y,
    label: row.word,
    source: "studio" as const,
  }));
}

export function markerAtTime(
  markers: PunchZoomMarker[],
  currentTime: number,
): PunchZoomMarker | null {
  let best: PunchZoomMarker | null = null;
  let bestDist = Infinity;
  for (const m of markers) {
    const dist = Math.abs(currentTime - m.at);
    if (dist <= PUNCH_ZOOM_WINDOW_SEC / 2 && dist < bestDist) {
      best = m;
      bestDist = dist;
    }
  }
  return best;
}

export function punchZoomTransform(
  marker: PunchZoomMarker | null,
  scale: number,
): string | undefined {
  if (!marker) return undefined;
  return `scale(${scale})`;
}

export function punchZoomTransformOrigin(marker: PunchZoomMarker | null): string {
  if (!marker) return "50% 50%";
  return `${marker.x * 100}% ${marker.y * 100}%`;
}

export function newClickMarker(
  at: number,
  x: number,
  y: number,
  index: number,
): PunchZoomMarker {
  return {
    id: `click-${at.toFixed(2)}-${index}`,
    at,
    x: Math.min(1, Math.max(0, x)),
    y: Math.min(1, Math.max(0, y)),
    label: `zoom @ ${at.toFixed(1)}s`,
    source: "click",
  };
}

export function mergeMarkers(
  studio: PunchZoomMarker[],
  clicks: PunchZoomMarker[],
): PunchZoomMarker[] {
  return [...studio, ...clicks].sort((a, b) => a.at - b.at);
}
