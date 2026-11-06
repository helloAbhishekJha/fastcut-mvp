"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  AI_FEATURE_DEFINITIONS,
  type AiFeatureCategory,
} from "@/lib/ai-feature-definitions";
import type { AppConfig, StudioPayload } from "@/lib/app-config";
import { ChevronDown, ChevronRight, Sparkles } from "lucide-react";

function DevFlagHint({
  show,
  envVar,
}: {
  show: boolean | undefined;
  envVar: string;
}) {
  if (!show) return null;
  return (
    <p className="text-xs text-amber-700/80 dark:text-amber-400/80">
      Disabled via env: {envVar}=false
    </p>
  );
}

type FeatureToggleState = Record<string, boolean>;

type Props = {
  config: AppConfig | null;
  studio: StudioPayload | null;
  toggles: FeatureToggleState;
  onToggle: (configKey: string, on: boolean) => void;
  audioProgress: number | null;
  step: string;
};

const CATEGORY_ORDER: AiFeatureCategory[] = [
  "Captions & text",
  "B-roll & visuals",
  "Script & hooks",
  "Audio cleanup",
  "Platform & framing",
  "Smart video",
  "Brand & export",
];

function isEnabled(config: AppConfig | null, key: string): boolean {
  if (!config) return false;
  return Boolean(config[key as keyof AppConfig]);
}

export function AiFeatureStudio({
  config,
  studio,
  toggles,
  onToggle,
  audioProgress,
  step,
}: Props) {
  const [open, setOpen] = useState(true);
  const [expandedCat, setExpandedCat] = useState<AiFeatureCategory | "all">(
    "all",
  );

  const enabledDefs = useMemo(
    () =>
      AI_FEATURE_DEFINITIONS.filter((d) => isEnabled(config, d.configKey)),
    [config],
  );

  const enabledCount = enabledDefs.length;
  const activeCount = enabledDefs.filter((d) => toggles[d.configKey] !== false)
    .length;

  if (!config || enabledCount === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">AI Feature Studio</CardTitle>
        </CardHeader>
        <CardContent>
          <DevFlagHint
            show={config?.showDevHints}
            envVar="All ENABLE_* AI flags"
          />
          <p className="text-sm text-muted-foreground">
            No AI editing features enabled. Turn on flags in `.env.local`.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-violet-200/60 dark:border-violet-900/40">
      <CardHeader className="pb-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Sparkles className="size-5 text-violet-600" />
            AI Feature Studio
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">
              {activeCount}/{enabledCount} active
            </Badge>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Collapse" : "Expand"}
            </Button>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Full AI pipeline — demo fixtures and simulated passes. Disabled flags
          are hidden (no half-UI).
        </p>
      </CardHeader>
      {open && (
        <CardContent className="space-y-4">
          {CATEGORY_ORDER.map((cat) => {
            const items = enabledDefs.filter((d) => d.category === cat);
            if (items.length === 0) return null;
            const catOpen = expandedCat === "all" || expandedCat === cat;
            return (
              <div key={cat} className="rounded-lg border">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-medium"
                  onClick={() =>
                    setExpandedCat((c) => (c === cat ? "all" : cat))
                  }
                >
                  <span>{cat}</span>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    {items.length} features
                    {catOpen ? (
                      <ChevronDown className="size-4" />
                    ) : (
                      <ChevronRight className="size-4" />
                    )}
                  </span>
                </button>
                {catOpen && (
                  <ul className="divide-y border-t px-3">
                    {items.map((def) => {
                      const on = toggles[def.configKey] !== false;
                      return (
                        <li
                          key={def.configKey}
                          className="flex flex-col gap-1 py-2 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div>
                            <p className="text-sm font-medium">{def.label}</p>
                            <p className="text-xs text-muted-foreground">
                              {def.description}
                            </p>
                          </div>
                          <label className="flex shrink-0 cursor-pointer items-center gap-2 text-xs">
                            <input
                              type="checkbox"
                              checked={on}
                              onChange={(e) =>
                                onToggle(def.configKey, e.target.checked)
                              }
                              className="size-4 rounded border"
                            />
                            {on ? "On" : "Off"}
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}

          {step !== "upload" && studio && (
            <div className="space-y-3 rounded-lg bg-muted/30 p-3 text-sm">
              <p className="font-medium">Pipeline output ({studio.source})</p>
              {config.enableHashtagSuggestions && studio.hashtags.length > 0 && (
                <p>
                  <span className="text-muted-foreground">Hashtags: </span>
                  {studio.hashtags.join(" ")}
                </p>
              )}
              {config.enableKaraokeCaptions && studio.karaokeLine && (
                <div>
                  <p className="text-muted-foreground mb-1">Karaoke (stub)</p>
                  <p className="font-mono text-xs">
                    {(studio as { karaokeWords?: string[] }).karaokeWords?.map(
                      (w, i) => (
                        <span
                          key={i}
                          className={
                            i === 0
                              ? "rounded bg-violet-500/30 px-0.5"
                              : undefined
                          }
                        >
                          {w}{" "}
                        </span>
                      ),
                    )}
                  </p>
                </div>
              )}
              {config.enableScriptRewrite && studio.scriptRewrite && (
                <p>
                  <span className="text-muted-foreground">Rewrite: </span>
                  {studio.scriptRewrite}
                </p>
              )}
              {config.enableCtaLines && studio.ctaLines.length > 0 && (
                <ul className="list-disc pl-5">
                  {studio.ctaLines.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              )}
              {config.enableStockBroll && studio.stockBroll.length > 0 && (
                <ul className="text-xs text-muted-foreground">
                  {studio.stockBroll.map((b) => (
                    <li key={b.at}>
                      {b.at}s · {b.query} ({b.duration}s)
                    </li>
                  ))}
                </ul>
              )}
              {config.enableAutoChapters && studio.chapters.length > 0 && (
                <ul className="text-xs">
                  {studio.chapters.map((c) => (
                    <li key={c.start}>
                      {c.start}s — {c.title}
                    </li>
                  ))}
                </ul>
              )}
              {config.enableViralMoments && studio.viralMoments.length > 0 && (
                <ul className="text-xs">
                  {studio.viralMoments.map((v) => (
                    <li key={v.start}>
                      {v.start}s–{v.end}s · score {v.score} · {v.label}
                    </li>
                  ))}
                </ul>
              )}
              {config.enableAutoThumbnail && studio.thumbnails.length > 0 && (
                <p className="text-xs">
                  Thumbnail picks:{" "}
                  {studio.thumbnails
                    .map((t) => `${t.t}s (${t.score})`)
                    .join(", ")}
                </p>
              )}
              {config.enableEndCardCta && studio.endCard && (
                <p>
                  End card: {studio.endCard.headline} · {studio.endCard.button}
                </p>
              )}
              {(config.enableVoiceDenoise || config.enableAudioNormalize) &&
                audioProgress !== null && (
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      Audio passes: {studio.audioPasses.join(", ") || "—"}
                    </p>
                    <Progress value={audioProgress} />
                  </div>
                )}
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}
