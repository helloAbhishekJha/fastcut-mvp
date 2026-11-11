"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type RefObject,
} from "react";
import { Label } from "@/components/ui/label";
import { Scissors } from "lucide-react";
import {
  clampTimelineTrim,
  formatTimelineTime,
  type TimelineTrimRange,
} from "@/features/timeline-trim/types";

type DragHandle = "in" | "out" | "playhead" | null;

export type TimelineTrimPanelProps = {
  videoRef: RefObject<HTMLVideoElement | null>;
  className?: string;
};

export function TimelineTrimPanel({ videoRef, className }: TimelineTrimPanelProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);
  const [playhead, setPlayhead] = useState(0);
  const [range, setRange] = useState<TimelineTrimRange>({ inPoint: 0, outPoint: 0 });
  const [dragging, setDragging] = useState<DragHandle>(null);
  const labelId = useId();

  const syncDuration = useCallback(() => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;
    const d = video.duration;
    setDuration(d);
    setRange((prev) => clampTimelineTrim(
      prev.outPoint > 0 ? prev : { inPoint: 0, outPoint: d },
      d,
    ));
  }, [videoRef]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onMeta = () => syncDuration();
    const onTimeUpdate = () => {
      const t = video.currentTime;
      setPlayhead(t);
      if (range.outPoint > range.inPoint && t >= range.outPoint - 0.05) {
        video.pause();
        video.currentTime = range.outPoint;
      }
    };

    video.addEventListener("loadedmetadata", onMeta);
    video.addEventListener("durationchange", onMeta);
    video.addEventListener("timeupdate", onTimeUpdate);
    if (video.readyState >= 1) syncDuration();

    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      video.removeEventListener("durationchange", onMeta);
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [videoRef, range.inPoint, range.outPoint, syncDuration]);

  const seekFromClientX = useCallback(
    (clientX: number) => {
      const bar = barRef.current;
      if (!bar || duration <= 0) return 0;
      const rect = bar.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      return ratio * duration;
    },
    [duration],
  );

  const applyRange = useCallback(
    (next: TimelineTrimRange) => {
      setRange(clampTimelineTrim(next, duration));
    },
    [duration],
  );

  useEffect(() => {
    if (!dragging) return;

    const onMove = (e: PointerEvent) => {
      const t = seekFromClientX(e.clientX);
      if (dragging === "playhead") {
        const clamped = Math.min(Math.max(range.inPoint, t), range.outPoint);
        const video = videoRef.current;
        if (video) video.currentTime = clamped;
        setPlayhead(clamped);
        return;
      }
      if (dragging === "in") {
        applyRange({ inPoint: Math.min(t, range.outPoint), outPoint: range.outPoint });
        const video = videoRef.current;
        if (video && video.currentTime < t) video.currentTime = t;
      } else if (dragging === "out") {
        applyRange({ inPoint: range.inPoint, outPoint: Math.max(t, range.inPoint) });
        const video = videoRef.current;
        if (video && video.currentTime > t) video.currentTime = t;
      }
    };

    const onUp = () => setDragging(null);

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [dragging, range, applyRange, seekFromClientX, videoRef]);

  const pct = (sec: number) => (duration > 0 ? (sec / duration) * 100 : 0);

  const selectionWidth = Math.max(0, pct(range.outPoint) - pct(range.inPoint));

  if (duration <= 0) {
    return (
      <div className={className}>
        <p className="text-sm text-muted-foreground">
          Load a clip to trim on the export timeline (preview only).
        </p>
      </div>
    );
  }

  const trimmedLength = Math.max(0, range.outPoint - range.inPoint);

  return (
    <div className={className}>
      <div className="flex items-center justify-between gap-2">
        <Label id={labelId} className="flex items-center gap-2 text-sm font-medium">
          <Scissors className="size-4 text-violet-500" />
          Timeline trim (HyperFrames-style)
        </Label>
        <span className="text-xs text-muted-foreground">Preview only · MVP</span>
      </div>

      <div
        className="mt-3 space-y-2"
        role="group"
        aria-labelledby={labelId}
        aria-label="Trim in and out points"
      >
        <div
          ref={barRef}
          className="relative h-10 cursor-pointer rounded-lg border bg-muted/50"
          onPointerDown={(e) => {
            if (dragging) return;
            const t = seekFromClientX(e.clientX);
            const video = videoRef.current;
            const clamped = Math.min(Math.max(range.inPoint, t), range.outPoint);
            if (video) video.currentTime = clamped;
            setPlayhead(clamped);
            setDragging("playhead");
          }}
        >
          <div
            className="absolute inset-y-2 rounded-md bg-violet-500/25 border border-violet-500/40"
            style={{
              left: `${pct(range.inPoint)}%`,
              width: `${selectionWidth}%`,
            }}
            aria-hidden
          />

          <TrimMarkerHandle
            label="In"
            positionPct={pct(range.inPoint)}
            color="emerald"
            onPointerDown={(e) => {
              e.stopPropagation();
              setDragging("in");
            }}
          />
          <TrimMarkerHandle
            label="Out"
            positionPct={pct(range.outPoint)}
            color="rose"
            onPointerDown={(e) => {
              e.stopPropagation();
              setDragging("out");
            }}
          />

          <div
            className="pointer-events-none absolute top-0 bottom-0 w-0.5 bg-white shadow"
            style={{ left: `${pct(playhead)}%` }}
            aria-hidden
          />
        </div>

        <TrimScrubBar
          duration={duration}
          inPoint={range.inPoint}
          outPoint={range.outPoint}
          playhead={playhead}
          onScrub={(t) => {
            const clamped = Math.min(Math.max(range.inPoint, t), range.outPoint);
            const video = videoRef.current;
            if (video) video.currentTime = clamped;
            setPlayhead(clamped);
          }}
        />

        <dl className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
          <div>
            <dt className="font-medium text-foreground">In</dt>
            <dd>{formatTimelineTime(range.inPoint)}</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Out</dt>
            <dd>{formatTimelineTime(range.outPoint)}</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Duration</dt>
            <dd>{formatTimelineTime(trimmedLength)}</dd>
          </div>
        </dl>

        <p className="text-xs text-muted-foreground">
          Drag emerald (in) and rose (out) markers, or scrub inside the selection. Export
          downloads still use the full clip until FFmpeg trim ships.
        </p>
      </div>
    </div>
  );
}

function TrimMarkerHandle({
  label,
  positionPct,
  color,
  onPointerDown,
}: {
  label: string;
  positionPct: number;
  color: "emerald" | "rose";
  onPointerDown: (e: ReactPointerEvent) => void;
}) {
  const bg = color === "emerald" ? "bg-emerald-500" : "bg-rose-500";
  return (
    <button
      type="button"
      aria-label={`${label} point`}
      className={`absolute top-1/2 z-10 flex h-8 w-3 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-sm ${bg} shadow-md touch-none`}
      style={{ left: `${positionPct}%` }}
      onPointerDown={onPointerDown}
    >
      <span className="sr-only">{label}</span>
    </button>
  );
}

function TrimScrubBar({
  duration,
  inPoint,
  outPoint,
  playhead,
  onScrub,
}: {
  duration: number;
  inPoint: number;
  outPoint: number;
  playhead: number;
  onScrub: (t: number) => void;
}) {
  return (
    <input
      type="range"
      min={inPoint}
      max={outPoint}
      step={0.05}
      value={Math.min(Math.max(playhead, inPoint), outPoint)}
      onChange={(e) => onScrub(Number(e.target.value))}
      className="h-2 w-full cursor-pointer accent-violet-600"
      aria-label="Scrub trimmed preview"
      disabled={duration <= 0 || outPoint <= inPoint}
    />
  );
}
