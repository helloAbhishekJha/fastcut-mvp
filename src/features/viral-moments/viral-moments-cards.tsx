"use client";

import { Badge } from "@/components/ui/badge";
import type { ViralMomentClip } from "@/features/viral-moments/types";
import { Film } from "lucide-react";

function platformBadgeClass(platform: ViralMomentClip["platform"]): string {
  switch (platform) {
    case "Reels":
      return "bg-gradient-to-r from-pink-500/15 to-purple-500/15 text-pink-800 dark:text-pink-200";
    case "Shorts":
      return "bg-red-500/15 text-red-800 dark:text-red-200";
    case "TikTok":
      return "bg-zinc-800/10 text-zinc-900 dark:bg-zinc-100/10 dark:text-zinc-100";
    default:
      return "";
  }
}

type Props = {
  clips: ViralMomentClip[];
  source?: string;
  compact?: boolean;
};

export function ViralMomentsCards({ clips, source, compact }: Props) {
  if (clips.length === 0) return null;

  return (
    <div className="space-y-2">
      <ViralMomentsHeader compact={compact} source={source} />
      <ul
        className={
          compact
            ? "space-y-2"
            : "grid gap-2 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {clips.map((clip) => (
          <li
            key={`${clip.start}-${clip.platform}`}
            className="rounded-lg border bg-card p-3 text-sm shadow-sm"
          >
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <Badge variant="outline" className={platformBadgeClass(clip.platform)}>
                {clip.platform}
              </Badge>
              <span className="text-xs font-medium text-violet-600 dark:text-violet-400">
                Score {clip.score}
              </span>
            </div>
            <p className="font-medium leading-snug">{clip.label}</p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              {clip.start.toFixed(1)}s – {clip.end.toFixed(1)}s
              <span className="ml-2 text-foreground/70">
                ({(clip.end - clip.start).toFixed(1)}s clip)
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ViralMomentsHeader({
  compact,
  source,
}: {
  compact?: boolean;
  source?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Film className="size-4 text-violet-600" aria-hidden />
      <p className={compact ? "text-sm font-medium" : "font-medium"}>
        Viral clip windows
      </p>
      {source && (
        <span className="text-xs text-muted-foreground">· {source}</span>
      )}
    </div>
  );
}
