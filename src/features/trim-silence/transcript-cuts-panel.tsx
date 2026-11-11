"use client";

import type { AppConfig } from "@/lib/app-config";
import type { StudioPayload } from "@/lib/app-config";
import { FillerCutList } from "@/features/filler-removal/filler-cut-list";
import { TrimSilenceCutList } from "@/features/trim-silence/trim-silence-cut-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Film } from "lucide-react";

type ToggleState = Record<string, boolean>;

type Props = {
  config: AppConfig;
  studio: StudioPayload | null;
  toggles: ToggleState;
  compact?: boolean;
};

export function TranscriptCutsPanel({
  config,
  studio,
  toggles,
  compact = false,
}: Props) {
  const showSilence =
    config.enableTrimSilence !== false &&
    toggles.enableTrimSilence !== false &&
    studio &&
    studio.silenceCuts.length > 0;
  const showFiller =
    config.enableFillerWordRemoval !== false &&
    toggles.enableFillerWordRemoval !== false &&
    studio &&
    studio.fillerCuts.length > 0;

  if (!showSilence && !showFiller) return null;

  const inner = (
    <div className="space-y-4">
      {showSilence && (
        <div>
          <p className="mb-2 text-sm font-medium">Silence trim (Clipwright)</p>
          <TrimSilenceCutList
            cuts={studio!.silenceCuts}
            compact={compact}
            showTranscript={!compact}
          />
        </div>
      )}
      {showFiller && (
        <div>
          <p className="mb-2 text-sm font-medium">Filler removal (MakeMyClip)</p>
          <FillerCutList cuts={studio!.fillerCuts} compact={compact} />
        </div>
      )}
    </div>
  );

  if (compact) return inner;

  return (
    <Card className="border-emerald-200/50 dark:border-emerald-900/40">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <Film className="size-4 text-emerald-600" />
          Transcript cuts
        </CardTitle>
        <p className="text-xs text-muted-foreground">
          Cut list from demo transcript — preview only, no server FFmpeg.
        </p>
      </CardHeader>
      <CardContent>{inner}</CardContent>
    </Card>
  );
}
