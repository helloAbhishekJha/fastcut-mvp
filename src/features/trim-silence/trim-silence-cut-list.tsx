"use client";

import { Badge } from "@/components/ui/badge";
import {
  DEMO_TRANSCRIPT_SEGMENTS,
  DEMO_TRANSCRIPT_WORDS,
} from "@/features/trim-silence/transcript-fixture";
import {
  formatCutTime,
  type SilenceCut,
} from "@/features/trim-silence/silence-cuts";
import { Scissors } from "lucide-react";

type Props = {
  cuts: SilenceCut[];
  compact?: boolean;
  showTranscript?: boolean;
};

function totalRemovedSec(cuts: SilenceCut[]): number {
  return cuts.reduce((sum, c) => sum + c.duration, 0);
}

export function TrimSilenceCutList({
  cuts,
  compact = false,
  showTranscript = !compact,
}: Props) {
  if (cuts.length === 0) {
    return (
      <p className="text-xs text-muted-foreground">
        No silence gaps above threshold in transcript fixture.
      </p>
    );
  }

  const removed = totalRemovedSec(cuts);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary" className="gap-1">
          <Scissors className="size-3" />
          {cuts.length} silence cut{cuts.length === 1 ? "" : "s"}
        </Badge>
        <span className="text-xs text-muted-foreground">
          ~{formatCutTime(removed)} removed (demo)
        </span>
      </div>

      <ul className={`${compact ? "text-xs" : "text-sm"} space-y-1.5`}>
        {cuts.map((cut) => (
          <li
            key={`${cut.start}-${cut.end}`}
            className="flex flex-wrap items-baseline justify-between gap-2 rounded-md border border-dashed border-emerald-500/40 bg-emerald-500/5 px-2 py-1.5"
          >
            <span className="font-mono text-xs">
              {formatCutTime(cut.start)} → {formatCutTime(cut.end)}
            </span>
            <span className="text-muted-foreground text-xs">
              −{formatCutTime(cut.duration)} dead air
            </span>
          </li>
        ))}
      </ul>

      {showTranscript && <TranscriptPreview cuts={cuts} />}
    </div>
  );
}

function TranscriptPreview({ cuts }: { cuts: SilenceCut[] }) {
  const cutRanges = cuts.map((c) => ({ start: c.start, end: c.end }));

  function isInSilenceCut(t: number): boolean {
    return cutRanges.some((r) => t >= r.start && t <= r.end);
  }

  function wordClass(start: number, end: number, text: string): string {
    const mid = (start + end) / 2;
    if (isInSilenceCut(mid)) {
      return "opacity-40 line-through decoration-emerald-600/70";
    }
    if (/^(um|like)$/i.test(text)) {
      return "opacity-50 line-through decoration-amber-600/80";
    }
    return "";
  }

  return (
    <div className="rounded-md border bg-muted/20 p-2">
      <p className="mb-1.5 text-xs font-medium text-muted-foreground">
        Transcript (fixture)
      </p>
      <p className="text-xs leading-relaxed">
        {DEMO_TRANSCRIPT_WORDS.map((w, i) => (
          <span key={`${w.start}-${i}`} className={wordClass(w.start, w.end, w.text)}>
            {w.text}{" "}
          </span>
        ))}
      </p>
      <p className="mt-2 text-[10px] text-muted-foreground">
        Lines:{" "}
        {DEMO_TRANSCRIPT_SEGMENTS.map((s) => s.text).join(" · ")}
      </p>
    </div>
  );
}
