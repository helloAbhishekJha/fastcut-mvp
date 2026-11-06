"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AiFeatureStudio } from "@/components/editor/ai-feature-studio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  PLATFORM_PRESETS,
  type PlatformPresetId,
} from "@/lib/ai-feature-definitions";
import {
  defaultAppConfigFallback,
  type AppConfig,
  type StudioPayload,
} from "@/lib/app-config";
import { presetAspectClass } from "@/lib/fixtures/studio";
import { Check, Download, Film, Lock, Sparkles, Upload } from "lucide-react";

type Step = "upload" | "analyze" | "edit" | "export";

type Caption = { start: number; end: number; text: string };

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

const STEPS: { id: Step; label: string }[] = [
  { id: "upload", label: "Upload" },
  { id: "analyze", label: "Analyze" },
  { id: "edit", label: "Edit" },
  { id: "export", label: "Export" },
];

const HD_KEY = "fastcut-hd-unlocked";

declare global {
  interface Window {
    paypal?: {
      Buttons: (config: {
        createOrder: () => Promise<string>;
        onApprove: (data: { orderID: string }) => Promise<void>;
        onError?: (err: unknown) => void;
      }) => { render: (el: HTMLElement) => Promise<void> };
    };
  }
}

function buildInitialToggles(): Record<string, boolean> {
  const base = defaultAppConfigFallback();
  const out: Record<string, boolean> = {};
  for (const [k, v] of Object.entries(base)) {
    if (k.startsWith("enable") && k !== "enablePaypal" && k !== "enableOpenai" && k !== "enableFfmpeg" && k !== "enableHdExport") {
      out[k] = v as boolean;
    }
  }
  return out;
}

export function FastCutEditor() {
  const [step, setStep] = useState<Step>("upload");
  const [file, setFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [preset, setPreset] = useState<PlatformPresetId>("reels");
  const [trimSilence, setTrimSilence] = useState(true);
  const [featureToggles, setFeatureToggles] = useState(buildInitialToggles);
  const [analyzeProgress, setAnalyzeProgress] = useState(0);
  const [audioProgress, setAudioProgress] = useState<number | null>(null);
  const [brief, setBrief] = useState("");
  const [captions, setCaptions] = useState<Caption[]>([]);
  const [hooks, setHooks] = useState<string[]>([]);
  const [studio, setStudio] = useState<StudioPayload | null>(null);
  const [captionSource, setCaptionSource] = useState<string>("fixture");
  const [config, setConfig] = useState<AppConfig | null>(null);
  const [hdUnlocked, setHdUnlocked] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const paypalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHdUnlocked(localStorage.getItem(HD_KEY) === "1");
    fetch("/api/config")
      .then((r) => r.json())
      .then(setConfig)
      .catch(() => setConfig(defaultAppConfigFallback()));
  }, []);

  const availablePresets = useMemo(() => {
    if (!config) return PLATFORM_PRESETS.filter((p) => p.id === "original");
    return PLATFORM_PRESETS.filter(
      (p) =>
        p.configKey === null ||
        config[p.configKey as keyof AppConfig] !== false,
    );
  }, [config]);

  useEffect(() => {
    if (!config) return;
    if (!availablePresets.some((p) => p.id === preset)) {
      setPreset(availablePresets[0]?.id ?? "original");
    }
    if (!config.enableTrimSilence) setTrimSilence(false);
  }, [config, preset, availablePresets]);

  const aiFeatureCount = useMemo(() => {
    if (!config) return 0;
    return Object.keys(featureToggles).filter(
      (k) => config[k as keyof AppConfig] !== false,
    ).length;
  }, [config, featureToggles]);

  const stepIndex = STEPS.findIndex((s) => s.id === step);

  const onFile = useCallback(
    (f: File | null) => {
      if (videoUrl) URL.revokeObjectURL(videoUrl);
      setFile(f);
      if (f) {
        setVideoUrl(URL.createObjectURL(f));
        setStep("upload");
        setAnalyzeProgress(0);
        setStudio(null);
      } else {
        setVideoUrl(null);
      }
    },
    [videoUrl],
  );

  const onFeatureToggle = useCallback((key: string, on: boolean) => {
    setFeatureToggles((prev) => ({ ...prev, [key]: on }));
  }, []);

  const runAnalyze = useCallback(async () => {
    if (!file) return;
    setStep("analyze");
    setAnalyzeProgress(0);
    setAudioProgress(null);
    setBusy(true);
    setMessage(null);

    const runTrim =
      trimSilence &&
      config?.enableTrimSilence !== false &&
      featureToggles.enableTrimSilence !== false;
    const runStudio = aiFeatureCount > 0;

    const ticks = config?.enableFfmpeg ? 10 : 6;
    for (let i = 1; i <= ticks; i++) {
      await new Promise((r) => setTimeout(r, config?.enableFfmpeg ? 350 : 250));
      setAnalyzeProgress(Math.round((i / ticks) * (runTrim ? 80 : 100)));
    }
    if (runTrim && !config?.enableFfmpeg) {
      setMessage(
        "Silence trim simulated (set ENABLE_FFMPEG=true for real processing).",
      );
    }

    if (
      (config?.enableVoiceDenoise || config?.enableAudioNormalize) &&
      (featureToggles.enableVoiceDenoise !== false ||
        featureToggles.enableAudioNormalize !== false)
    ) {
      for (let i = 1; i <= 4; i++) {
        await new Promise((r) => setTimeout(r, 200));
        setAudioProgress(i * 25);
      }
    }

    setAnalyzeProgress(100);

    if (runStudio) {
      const aiRes = await fetch("/api/ai/studio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ brief }),
      });
      const data = (await aiRes.json()) as StudioPayload & {
        karaokeWords?: string[];
      };
      setStudio(data);
      setCaptions(data.captions);
      setHooks(data.hooks);
      setCaptionSource(data.source);
    } else {
      setStudio(null);
      setCaptions([]);
      setHooks([]);
      setCaptionSource("disabled");
    }
    setBusy(false);
    setStep("edit");
  }, [
    file,
    brief,
    trimSilence,
    config,
    featureToggles,
    aiFeatureCount,
  ]);

  const unlockHd = useCallback(async () => {
    setBusy(true);
    setMessage(null);
    try {
      const res = await fetch("/api/paypal/create-order", { method: "POST" });
      const order = (await res.json()) as { id: string; demo?: boolean };
      if (order.demo || config?.demoMode) {
        await fetch("/api/paypal/capture-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orderId: order.id }),
        });
        localStorage.setItem(HD_KEY, "1");
        setHdUnlocked(true);
        setMessage("Demo mode: HD export unlocked.");
        return;
      }
      setMessage("Complete PayPal checkout below to unlock HD.");
    } catch {
      setMessage("Could not start checkout.");
    } finally {
      setBusy(false);
    }
  }, [config?.demoMode]);

  useEffect(() => {
    if (!config || config.demoMode || !config.enablePaypal || !config.paypalClientId) {
      return;
    }
    if (!paypalRef.current || hdUnlocked) return;

    const scriptId = "paypal-sdk";
    const renderButtons = () => {
      if (!window.paypal || !paypalRef.current) return;
      paypalRef.current.innerHTML = "";
      window.paypal
        .Buttons({
          createOrder: async () => {
            const res = await fetch("/api/paypal/create-order", { method: "POST" });
            const data = (await res.json()) as { id: string };
            return data.id;
          },
          onApprove: async (data) => {
            await fetch("/api/paypal/capture-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ orderId: data.orderID }),
            });
            localStorage.setItem(HD_KEY, "1");
            setHdUnlocked(true);
            setMessage("Payment captured — HD export enabled.");
          },
          onError: () => setMessage("PayPal error — check sandbox credentials."),
        })
        .render(paypalRef.current);
    };

    if (document.getElementById(scriptId)) {
      renderButtons();
      return;
    }
    const s = document.createElement("script");
    s.id = scriptId;
    s.src = `https://www.paypal.com/sdk/js?client-id=${config.paypalClientId}&currency=USD`;
    s.async = true;
    s.onload = renderButtons;
    document.body.appendChild(s);
  }, [config, hdUnlocked, step]);

  const exportDimensions = useMemo(() => {
    switch (preset) {
      case "reels":
      case "tiktok":
      case "shorts":
        return { w: 1080, h: 1920 };
      case "linkedin":
        return { w: 1080, h: 1080 };
      case "youtube":
        return { w: 1920, h: 1080 };
      default:
        return null;
    }
  }, [preset]);

  const downloadHd = useCallback(() => {
    if (!file) return;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = `fastcut-hd-${file.name}`;
    a.click();
  }, [file]);

  const downloadWatermarked = useCallback(async () => {
    const video = videoRef.current;
    if (!video || !file) return;
    setBusy(true);
    try {
      await new Promise<void>((resolve) => {
        if (video.readyState >= 2) resolve();
        else video.onloadeddata = () => resolve();
      });
      const canvas = document.createElement("canvas");
      const w = exportDimensions?.w ?? (video.videoWidth || 1280);
      const h = exportDimensions?.h ?? (video.videoHeight || 720);
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, w, h);
      const vw = video.videoWidth || w;
      const vh = video.videoHeight || h;
      const scale = Math.max(w / vw, h / vh);
      const dw = vw * scale;
      const dh = vh * scale;
      ctx.drawImage(video, (w - dw) / 2, (h - dh) / 2, dw, dh);
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.font = "bold 48px system-ui,sans-serif";
      ctx.fillText("FastCut MVP", 48, h - 80);
      ctx.font = "32px system-ui,sans-serif";
      ctx.fillText("Watermarked preview export", 48, h - 32);
      canvas.toBlob((blob) => {
        if (!blob) return;
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `fastcut-preview-${Date.now()}.png`;
        a.click();
      }, "image/png");
      setMessage("Exported watermarked still (video trim is MVP stub).");
    } finally {
      setBusy(false);
      setStep("export");
    }
  }, [file, exportDimensions]);

  const aspectClass = presetAspectClass(preset);

  const showBroll =
    config?.enableBrollUnderFace &&
    featureToggles.enableBrollUnderFace !== false &&
    step !== "upload";
  const showBlur =
    config?.enableBackgroundBlur &&
    featureToggles.enableBackgroundBlur !== false &&
    step !== "upload";
  const showCutout =
    config?.enableBackgroundRemove &&
    featureToggles.enableBackgroundRemove !== false &&
    step !== "upload";
  const showReframe =
    config?.enableSmartReframe &&
    featureToggles.enableSmartReframe !== false &&
    step !== "upload";
  const showLowerThird =
    config?.enableLowerThirds &&
    featureToggles.enableLowerThirds !== false &&
    studio?.lowerThird &&
    step !== "upload";
  const showBrand =
    config?.enableBrandTemplate &&
    featureToggles.enableBrandTemplate !== false &&
    step !== "upload";

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-10">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-violet-600">PayPal Hackathon · MVP v0.2</p>
          <h1 className="text-3xl font-bold tracking-tight">FastCut AI</h1>
          <p className="text-muted-foreground mt-1 max-w-xl">
            AI short-form studio — {aiFeatureCount}+ editing features, each toggled via env flags.
          </p>
        </div>
        {config && (
          <div className="flex flex-wrap gap-2">
            {config.demoMode && <Badge variant="secondary">Demo mode</Badge>}
            {config.enableOpenai && <Badge>OpenAI</Badge>}
            {config.enableFfmpeg && <Badge>FFmpeg</Badge>}
            {config.enablePaypal && <Badge>PayPal</Badge>}
            <Badge variant="outline">{aiFeatureCount} AI features</Badge>
          </div>
        )}
      </header>

      <nav className="grid grid-cols-4 gap-2">
        {STEPS.map((s, i) => (
          <div
            key={s.id}
            className={`rounded-lg border px-3 py-2 text-center text-sm ${
              i <= stepIndex ? "border-violet-500 bg-violet-50 dark:bg-violet-950/30" : "opacity-50"
            }`}
          >
            <span className="font-medium">{s.label}</span>
          </div>
        ))}
      </nav>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Film className="size-5" /> Preview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div
              className={`relative mx-auto w-full overflow-hidden rounded-xl bg-black ${aspectClass}`}
            >
              {videoUrl ? (
                <>
                  <video
                    ref={videoRef}
                    src={videoUrl}
                    controls
                    className={`h-full w-full object-contain ${showBlur ? "scale-105 blur-[2px]" : ""} ${showCutout ? "mix-blend-lighten" : ""}`}
                  />
                  {showReframe && (
                    <div className="pointer-events-none absolute inset-4 rounded-lg border-2 border-dashed border-emerald-400/70">
                      <span className="absolute -top-6 left-0 text-xs text-emerald-300">
                        Smart reframe / speaker track
                      </span>
                    </div>
                  )}
                  {showBroll && (
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] border-t border-violet-400/40 bg-gradient-to-t from-violet-950/80 to-transparent"
                      aria-hidden
                    >
                      <span className="absolute bottom-3 left-3 rounded bg-black/50 px-2 py-0.5 text-xs text-violet-100">
                        B-roll under speaker
                      </span>
                    </div>
                  )}
                  {showBrand && (
                    <div className="pointer-events-none absolute right-3 top-3 rounded bg-violet-600/80 px-2 py-1 text-xs text-white">
                      Brand safe zone
                    </div>
                  )}
                  {showLowerThird && studio?.lowerThird && (
                    <div className="pointer-events-none absolute bottom-14 left-3 rounded bg-black/70 px-3 py-2 text-left text-xs text-white">
                      <p className="font-semibold">{studio.lowerThird.name}</p>
                      <p className="opacity-80">{studio.lowerThird.title}</p>
                    </div>
                  )}
                  {config?.enablePunchInZoom &&
                    featureToggles.enablePunchInZoom !== false &&
                    step !== "upload" && (
                      <span className="pointer-events-none absolute right-3 bottom-3 text-[10px] text-amber-200">
                        Punch-in on emphasis
                      </span>
                    )}
                </>
              ) : (
                <div className="flex h-full min-h-[240px] flex-col items-center justify-center gap-2 text-zinc-400">
                  <Upload className="size-10 opacity-50" />
                  <p className="text-sm">Upload a clip to start</p>
                </div>
              )}
            </div>
            {config?.enableAutoCaptions !== false &&
              featureToggles.enableAutoCaptions !== false &&
              captions.length > 0 && (
                <div className="rounded-lg border bg-muted/40 p-3 text-sm">
                  <p className="mb-2 font-medium">
                    Auto-captions ({captionSource})
                    {config?.enableCaptionEmojis &&
                      featureToggles.enableCaptionEmojis !== false && (
                        <span className="text-muted-foreground font-normal">
                          {" "}
                          · emojis on
                        </span>
                      )}
                  </p>
                  <ul className="space-y-1">
                    {captions.map((c, i) => (
                      <li key={i}>
                        <span className="text-muted-foreground">
                          [{c.start.toFixed(1)}s–{c.end.toFixed(1)}s]
                        </span>{" "}
                        {c.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Workflow</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {step === "upload" && (
              <>
                <div>
                  <Label htmlFor="video">Video file</Label>
                  <Input
                    id="video"
                    type="file"
                    accept="video/*"
                    className="mt-2"
                    onChange={(e) => onFile(e.target.files?.[0] ?? null)}
                  />
                </div>
                {aiFeatureCount > 0 && (
                  <div>
                    <Label htmlFor="brief">One-line brief (AI studio)</Label>
                    <Textarea
                      id="brief"
                      placeholder="e.g. Launch teaser for a fintech app for Gen Z"
                      value={brief}
                      onChange={(e) => setBrief(e.target.value)}
                      className="mt-2 min-h-[80px]"
                    />
                  </div>
                )}
                <Button
                  className="w-full"
                  disabled={!file}
                  onClick={() => void runAnalyze()}
                >
                  <Sparkles className="mr-2 size-4" /> Run AI pipeline
                </Button>
              </>
            )}

            {step === "analyze" && (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Running AI Feature Studio pipeline…
                </p>
                <Progress value={analyzeProgress} />
                <p className="text-right text-xs text-muted-foreground">
                  {analyzeProgress}%
                </p>
              </div>
            )}

            {step === "edit" && (
              <>
                {availablePresets.length > 0 && (
                  <div className="space-y-2">
                    <Label>Platform preset</Label>
                    <div className="flex flex-wrap gap-2">
                      {availablePresets.map((p) => (
                        <Button
                          key={p.id}
                          type="button"
                          variant={preset === p.id ? "default" : "outline"}
                          size="sm"
                          onClick={() => setPreset(p.id)}
                        >
                          {p.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                {config?.enableTrimSilence !== false &&
                featureToggles.enableTrimSilence !== false ? (
                  <label className="flex cursor-pointer items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={trimSilence}
                      onChange={(e) => setTrimSilence(e.target.checked)}
                      className="size-4 rounded border"
                    />
                    Trim silence{" "}
                    {config?.enableFfmpeg ? "(ffmpeg.wasm)" : "(simulated)"}
                  </label>
                ) : (
                  <DevFlagHint
                    show={config?.showDevHints}
                    envVar="ENABLE_TRIM_SILENCE"
                  />
                )}
                {config?.enableAiHooks !== false &&
                  featureToggles.enableAiHooks !== false &&
                  hooks.length > 0 && (
                    <div className="rounded-lg border p-3 text-sm">
                      <p className="mb-2 font-medium">Hook ideas</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {hooks.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                <Button className="w-full" onClick={() => setStep("export")}>
                  Continue to export
                </Button>
              </>
            )}

            {step === "export" && (
              <>
                <Button
                  variant="outline"
                  className="w-full"
                  disabled={busy || !file}
                  onClick={() => void downloadWatermarked()}
                >
                  <Download className="mr-2 size-4" /> Download preview (watermarked)
                </Button>
                {config?.enableHdExport !== false && (
                  <>
                    {hdUnlocked ? (
                      <Button
                        className="w-full"
                        disabled={busy || !file}
                        onClick={downloadHd}
                      >
                        <Check className="mr-2 size-4" /> Download HD (original file)
                      </Button>
                    ) : (
                      <>
                        <Button
                          className="w-full"
                          disabled={busy}
                          onClick={() => void unlockHd()}
                        >
                          <Lock className="mr-2 size-4" /> Unlock HD export — $5
                        </Button>
                        {!config?.demoMode && config?.enablePaypal && (
                          <div ref={paypalRef} className="min-h-[45px]" />
                        )}
                      </>
                    )}
                  </>
                )}
                <Button variant="ghost" className="w-full" onClick={() => setStep("edit")}>
                  Back to edit
                </Button>
              </>
            )}

            {message && (
              <p className="text-sm text-muted-foreground" role="status">
                {message}
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <AiFeatureStudio
        config={config}
        studio={studio}
        toggles={featureToggles}
        onToggle={onFeatureToggle}
        audioProgress={audioProgress}
        step={step}
      />
    </div>
  );
}
