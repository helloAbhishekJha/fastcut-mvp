"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { DEMO_THUMBNAIL_PICKS, thumbnailDimensions } from "./fixtures";
import { renderThumbnailToCanvas, thumbnailPreviewDataUrl } from "./capture-thumbnail";
import type { ThumbnailAspect, ThumbnailPick } from "./types";
import { Download, ImageIcon } from "lucide-react";

type Props = {
  enabled: boolean;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  picks: ThumbnailPick[] | null;
  disabledHint?: boolean;
};

export function ThumbnailExportSection({
  enabled,
  videoRef,
  picks,
  disabledHint,
}: Props) {
  const [aspect, setAspect] = useState<ThumbnailAspect>("9:16");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const items = picks?.length ? picks : DEMO_THUMBNAIL_PICKS;
  const pick = items[selectedIndex] ?? items[0]!;

  const refreshPreview = useCallback(async () => {
    const video = videoRef.current;
    if (!enabled || !video) {
      setPreviewUrl(null);
      return;
    }
    setLoading(true);
    try {
      if (video.readyState < 2) {
        await new Promise<void>((resolve) => {
          const done = () => resolve();
          if (video.readyState >= 2) resolve();
          else video.addEventListener("loadeddata", done, { once: true });
        });
      }
      const url = await thumbnailPreviewDataUrl({ video, pick, aspect });
      setPreviewUrl(url);
    } catch {
      setPreviewUrl(null);
    } finally {
      setLoading(false);
    }
  }, [enabled, videoRef, pick, aspect]);

  useEffect(() => {
    void refreshPreview();
  }, [refreshPreview]);

  const downloadPng = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;
    const canvas = await renderThumbnailToCanvas({ video, pick, aspect });
    canvas.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `fastcut-thumbnail-${aspect.replace(":", "x")}-${pick.t}s.png`;
      a.click();
      URL.revokeObjectURL(a.href);
    }, "image/png");
  }, [videoRef, pick, aspect]);

  if (!enabled) {
    if (!disabledHint) return null;
    return (
      <p className="text-xs text-amber-700/80 dark:text-amber-400/80">
        Auto thumbnail hidden (ENABLE_AUTO_THUMBNAIL=false)
      </p>
    );
  }

  const { w, h } = thumbnailDimensions(aspect);
  const previewClass =
    aspect === "9:16" ? "aspect-[9/16] max-h-56" : "aspect-square max-h-48";

  return (
    <div className="space-y-3 rounded-lg border border-emerald-200/50 bg-emerald-50/30 p-3 dark:border-emerald-900/40 dark:bg-emerald-950/20">
      <div className="flex items-center gap-2">
        <ImageIcon className="size-4 text-emerald-600" />
        <p className="text-sm font-medium">Auto thumbnail</p>
        <Badge variant="secondary" className="text-[10px]">
          Top {items.length}
        </Badge>
      </div>
      <p className="text-xs text-muted-foreground">
        Frame grab from pipeline · {w}×{h} PNG
      </p>

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

      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={item.t}>
            <button
              type="button"
              onClick={() => setSelectedIndex(i)}
              className={`flex w-full items-center justify-between rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                selectedIndex === i
                  ? "border-emerald-500 bg-emerald-100/80 dark:bg-emerald-950/50"
                  : "hover:border-emerald-400/60"
              }`}
            >
              <span>
                <span className="font-medium">{item.note}</span>
                <span className="block text-xs text-muted-foreground">
                  {item.t}s · score {item.score}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {previewUrl ? (
        <div
          className={`mx-auto w-full max-w-[200px] overflow-hidden rounded-lg border bg-black shadow-sm ${previewClass}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={previewUrl} alt="Thumbnail preview" className="h-full w-full object-cover" />
        </div>
      ) : (
        <p className="text-xs text-muted-foreground">
          {loading ? "Rendering preview…" : "Load a clip to preview thumbnail."}
        </p>
      )}

      <Button
        type="button"
        variant="secondary"
        className="w-full"
        disabled={loading || !previewUrl}
        onClick={() => void downloadPng()}
      >
        <Download className="mr-2 size-4" />
        Download thumbnail PNG
      </Button>
    </div>
  );
}
