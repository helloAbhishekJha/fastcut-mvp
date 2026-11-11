"use client";

import { Badge } from "@/components/ui/badge";
import {
  formatCutTime,
  type FillerCut,
} from "@/features/filler-removal/filler-cuts";
import { MessageSquareOff } from "lucide-react";

type Props = {
  cuts: FillerCut[];
  compact?: boolean;
};

export function FillerCutList({ cuts, compact = false }: Props) {
  if (cuts.length === 0) {
    return (
      <p className="text-xs text-muted-foreground">
        No filler words detected in transcript fixture.
      </p>
    );
  }

  const removed = cuts.reduce((sum, c) => sum + (c.end - c.start), 0);

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary" className="gap-1">
          <MessageSquareOff className="size-3" />
          {cuts.length} filler cut{cuts.length === 1 ? "" : "s"}
        </Badge>
        <span className="text-xs text-muted-foreground">
          ~{formatCutTime(removed)} trimmed (demo)
        </span>
      </div>
      <ul className={`${compact ? "text-xs" : "text-sm"} space-y-1.5`}>
        {cuts.map((cut) => (
          <li
            key={`${cut.start}-${cut.word}`}
            className="flex flex-wrap items-baseline justify-between gap-2 rounded-md border border-dashed border-amber-500/40 bg-amber-500/5 px-2 py-1.5"
          >
            <span className="font-medium">&ldquo;{cut.word}&rdquo;</span>
            <span className="font-mono text-xs text-muted-foreground">
              {formatCutTime(cut.start)} → {formatCutTime(cut.end)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
