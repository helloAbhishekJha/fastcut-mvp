"use client";

import { useCallback, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  DEMO_END_CARD,
  END_CARD_TEMPLATES,
  endCardDimensions,
} from "./fixtures";
import { endCardPreviewDataUrl, renderEndCardToCanvas } from "./render-end-card";
import type { EndCardAspect, EndCardCopy, EndCardTemplateId } from "./types";
import { Download } from "lucide-react";

type Props = {
  enabled: boolean;
  studioCopy: EndCardCopy | null;
  disabledHint?: boolean;
};

export function EndCardExportSection({ enabled, studioCopy, disabledHint }: Props) {
  const [aspect, setAspect] = useState<EndCardAspect>("9:16");
  const [templateId, setTemplateId] = useState<EndCardTemplateId>("doory-gradient");
  const copy = studioCopy ?? DEMO_END_CARD;

  const template = useMemo(
    () => END_CARD_TEMPLATES.find((t) => t.id === templateId) ?? END_CARD_TEMPLATES[0]!,
    [templateId],
  );

  const previewUrl = useMemo(() => {
    if (!enabled) return null;
    return endCardPreviewDataUrl({ template, aspect, copy });
  }, [enabled, template, aspect, copy]);

  const downloadPng = useCallback(() => {
    const canvas = renderEndCardToCanvas({ template, aspect, copy });
    canvas.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `fastcut-end-card-${aspect.replace(":", "x")}-${templateId}.png`;
      a.click();
      URL.revokeObjectURL(a.href);
    }, "image/png");
  }, [template, aspect, copy, templateId]);

  if (!enabled) {
    if (!disabledHint) return null;
    return (
      <p className="text-xs text-amber-700/80 dark:text-amber-400/80">
        End-card templates hidden (ENABLE_END_CARD_CTA=false)
      </p>
    );
  }

  const { w, h } = endCardDimensions(aspect);
  const previewClass =
    aspect === "9:16" ? "aspect-[9/16] max-h-56" : "aspect-square max-h-48";

  return (
    <div className="space-y-3 rounded-lg border border-violet-200/50 bg-violet-50/30 p-3 dark:border-violet-900/40 dark:bg-violet-950/20">
      <div className="space-y-1">
        <p className="text-sm font-medium">Doory-style end card</p>
        <p className="text-xs text-muted-foreground">
          Static closing frame · {w}×{h} PNG
        </p>
      </div>

      <div className="space-y-2">
        <Label className="text-xs">Aspect</Label>
        <div className="flex gap-2">
          {(["9:16", "1:1"] as const).map((a) => (
            <Button
              key={a}
              type="button"
              size="sm"
              variant={aspect === a ? "default" : "outline"}
              onClick={() => setAspect(a)}
            >
              {a === "9:16" ? "Reels 9:16" : "Square 1:1"}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-xs">Template</Label>
        <div className="flex flex-col gap-2">
          {END_CARD_TEMPLATES.filter((t) => t.aspects.includes(aspect)).map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTemplateId(t.id)}
              className={`rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                templateId === t.id
                  ? "border-violet-500 bg-violet-100/80 dark:bg-violet-950/50"
                  : "hover:border-violet-400/60"
              }`}
            >
              <span className="font-medium">{t.label}</span>
              <span className="block text-xs text-muted-foreground">{t.description}</span>
            </button>
          ))}
        </div>
      </div>

      {previewUrl && (
        <div
          className={`mx-auto w-full max-w-[200px] overflow-hidden rounded-lg border bg-black shadow-sm ${previewClass}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={previewUrl} alt="End card preview" className="h-full w-full object-cover" />
        </div>
      )}

      <p className="text-xs text-muted-foreground">
        {copy.headline} · <span className="text-foreground">{copy.button}</span>
      </p>

      <Button type="button" variant="secondary" className="w-full" onClick={downloadPng}>
        <Download className="mr-2 size-4" />
        Download end-card PNG
      </Button>
    </div>
  );
}
