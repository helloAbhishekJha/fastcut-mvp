"use client";

import {
  useCallback,
  useEffect,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { Crosshair, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  markerAtTime,
  punchZoomTransform,
  punchZoomTransformOrigin,
} from "./marker-utils";
import {
  PUNCH_ZOOM_EASE_MS,
  PUNCH_ZOOM_SCALE,
} from "./constants";
import type { PunchZoomMarker } from "./types";

type Props = {
  enabled: boolean;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  markers: PunchZoomMarker[];
  placementArmed: boolean;
  onArmPlacement: (armed: boolean) => void;
  onPlaceMarker: (at: number, x: number, y: number) => void;
  onRemoveMarker?: (id: string) => void;
  children: ReactNode;
};

export function PunchInZoomPreview({
  enabled,
  videoRef,
  markers,
  placementArmed,
  onArmPlacement,
  onPlaceMarker,
  onRemoveMarker,
  children,
}: Props) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const sync = () => {
      setCurrentTime(el.currentTime);
      if (Number.isFinite(el.duration)) setDuration(el.duration);
    };
    sync();
    el.addEventListener("timeupdate", sync);
    el.addEventListener("loadedmetadata", sync);
    el.addEventListener("durationchange", sync);
    return () => {
      el.removeEventListener("timeupdate", sync);
      el.removeEventListener("loadedmetadata", sync);
      el.removeEventListener("durationchange", sync);
    };
  }, [videoRef, enabled]);

  const active = enabled ? markerAtTime(markers, currentTime) : null;
  const scale = active ? PUNCH_ZOOM_SCALE : 1;

  const handlePreviewClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!enabled || !placementArmed || !videoRef.current) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const at = videoRef.current.currentTime;
      onPlaceMarker(at, x, y);
    },
    [enabled, placementArmed, videoRef, onPlaceMarker],
  );

  const seekTo = useCallback(
    (at: number) => {
      const el = videoRef.current;
      if (!el) return;
      el.currentTime = at;
      void el.play().catch(() => undefined);
    },
    [videoRef],
  );

  if (!enabled) {
    return <>{children}</>;
  }

  const trackDuration = duration > 0 ? duration : Math.max(...markers.map((m) => m.at), 12);

  return (
    <div className="relative h-full w-full">
      <div
        className={`h-full w-full ${placementArmed ? "cursor-crosshair" : ""}`}
        style={{
          transform: punchZoomTransform(active, scale),
          transformOrigin: punchZoomTransformOrigin(active),
          transition: `transform ${PUNCH_ZOOM_EASE_MS}ms ease-out`,
        }}
        onClick={placementArmed ? handlePreviewClick : undefined}
        role={placementArmed ? "button" : undefined}
        aria-label={placementArmed ? "Click to place punch-in zoom" : undefined}
      >
        {children}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-2 flex justify-center gap-2 px-2">
        <div className="pointer-events-auto flex items-center gap-1 rounded-full bg-black/55 px-2 py-1 text-[10px] text-amber-100 backdrop-blur-sm">
          <ZoomIn className="size-3" aria-hidden />
          <span>OpenScreen-style punch-in</span>
          <Button
            type="button"
            size="sm"
            variant={placementArmed ? "default" : "secondary"}
            className="h-6 px-2 text-[10px]"
            onClick={() => onArmPlacement(!placementArmed)}
          >
            <Crosshair className="mr-1 size-3" aria-hidden />
            {placementArmed ? "Click frame…" : "Place zoom"}
          </Button>
        </div>
      </div>

      {markers.length > 0 && (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-9 bg-gradient-to-t from-black/75 to-transparent"
          aria-hidden={false}
        >
          <div className="relative mx-2 mt-4 h-4 rounded-full bg-white/15">
            {markers.map((m) => {
              const pct = Math.min(100, Math.max(0, (m.at / trackDuration) * 100));
              const isActive =
                active?.id === m.id ||
                Math.abs(currentTime - m.at) < 0.15;
              return (
                <button
                  key={m.id}
                  type="button"
                  title={
                    m.label ??
                    `${m.at.toFixed(1)}s · ${m.source === "click" ? "click" : "AI"}`
                  }
                  className={`pointer-events-auto absolute top-1/2 max-w-[5.5rem] -translate-x-1/2 -translate-y-1/2 truncate rounded-full px-2 py-0.5 text-[9px] font-medium shadow ${
                    isActive
                      ? "bg-amber-400 text-amber-950 ring-1 ring-amber-200"
                      : m.source === "click"
                        ? "bg-violet-500/90 text-white hover:bg-violet-400"
                        : "bg-amber-500/85 text-amber-950 hover:bg-amber-400"
                  }`}
                  style={{ left: `${pct}%` }}
                  onClick={(e) => {
                    e.stopPropagation();
                    seekTo(m.at);
                  }}
                  onContextMenu={(e) => {
                    if (m.source !== "click" || !onRemoveMarker) return;
                    e.preventDefault();
                    onRemoveMarker(m.id);
                  }}
                >
                  {m.label ?? `${m.at.toFixed(1)}s`}
                </button>
              );
            })}
          </div>
          <p className="pointer-events-none px-2 pb-1 text-center text-[9px] text-white/60">
            Pills seek · right-click click-markers to remove
          </p>
        </div>
      )}
    </div>
  );
}
