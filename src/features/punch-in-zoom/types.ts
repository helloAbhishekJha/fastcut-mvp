/** Studio fixture shape from `/api/ai/studio`. */
export type StudioPunchZoom = { at: number; word: string };

export type PunchZoomMarker = {
  id: string;
  /** seconds on the timeline */
  at: number;
  /** normalized focus point 0–1 */
  x: number;
  y: number;
  label?: string;
  source: "studio" | "click";
};
