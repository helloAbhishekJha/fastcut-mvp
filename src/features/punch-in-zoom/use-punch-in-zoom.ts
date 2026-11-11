"use client";

import { useCallback, useMemo, useState } from "react";
import {
  mergeMarkers,
  newClickMarker,
  studioPunchZoomsToMarkers,
} from "./marker-utils";
import type { PunchZoomMarker, StudioPunchZoom } from "./types";

export function usePunchInZoom(studioPunchZooms: StudioPunchZoom[] | undefined) {
  const [clickMarkers, setClickMarkers] = useState<PunchZoomMarker[]>([]);
  const [placementArmed, setPlacementArmed] = useState(false);

  const studioMarkers = useMemo(
    () => studioPunchZoomsToMarkers(studioPunchZooms),
    [studioPunchZooms],
  );

  const markers = useMemo(
    () => mergeMarkers(studioMarkers, clickMarkers),
    [studioMarkers, clickMarkers],
  );

  const resetUserMarkers = useCallback(() => {
    setClickMarkers([]);
    setPlacementArmed(false);
  }, []);

  const addClickMarker = useCallback((at: number, x: number, y: number) => {
    setClickMarkers((prev) => [...prev, newClickMarker(at, x, y, prev.length)]);
    setPlacementArmed(false);
  }, []);

  const removeClickMarker = useCallback((id: string) => {
    setClickMarkers((prev) => prev.filter((m) => m.id !== id));
  }, []);

  return {
    markers,
    placementArmed,
    setPlacementArmed,
    addClickMarker,
    removeClickMarker,
    resetUserMarkers,
  };
}
