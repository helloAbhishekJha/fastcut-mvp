import { thumbnailDimensions } from "./fixtures";
import type { ThumbnailRenderInput } from "./types";

export async function seekVideoTo(video: HTMLVideoElement, timeSec: number): Promise<void> {
  const clamped = Math.max(0, Math.min(timeSec, Math.max(0, video.duration - 0.05)));
  if (Number.isFinite(video.duration) && Math.abs(video.currentTime - clamped) < 0.02) {
    return;
  }
  return new Promise((resolve, reject) => {
    const onSeeked = () => {
      video.removeEventListener("seeked", onSeeked);
      resolve();
    };
    const onError = () => {
      video.removeEventListener("error", onError);
      reject(new Error("seek failed"));
    };
    video.addEventListener("seeked", onSeeked);
    video.addEventListener("error", onError);
    try {
      video.currentTime = clamped;
    } catch {
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("error", onError);
      resolve();
    }
  });
}

export async function renderThumbnailToCanvas(
  input: ThumbnailRenderInput,
): Promise<HTMLCanvasElement> {
  const { w, h } = thumbnailDimensions(input.aspect);
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  await seekVideoTo(input.video, input.pick.t);
  await new Promise((r) => requestAnimationFrame(() => r(undefined)));

  ctx.fillStyle = "#0a0a0a";
  ctx.fillRect(0, 0, w, h);

  const vw = input.video.videoWidth || w;
  const vh = input.video.videoHeight || h;
  const scale = Math.max(w / vw, h / vh);
  const dw = vw * scale;
  const dh = vh * scale;
  ctx.drawImage(input.video, (w - dw) / 2, (h - dh) / 2, dw, dh);

  const barH = Math.round(h * 0.14);
  const grad = ctx.createLinearGradient(0, h - barH, 0, h);
  grad.addColorStop(0, "rgba(0,0,0,0)");
  grad.addColorStop(1, "rgba(0,0,0,0.75)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, h - barH, w, barH);

  ctx.fillStyle = "#ffffff";
  ctx.font = `700 ${Math.round(w * 0.045)}px system-ui,sans-serif`;
  ctx.fillText(input.pick.note, Math.round(w * 0.05), h - barH * 0.38);

  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.font = `600 ${Math.round(w * 0.032)}px system-ui,sans-serif`;
  ctx.fillText(
    `Score ${input.pick.score} · ${input.pick.t.toFixed(1)}s`,
    Math.round(w * 0.05),
    h - barH * 0.12,
  );

  const mark = input.watermark ?? "FastCut thumbnail";
  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.font = `500 ${Math.round(w * 0.026)}px system-ui,sans-serif`;
  const tw = ctx.measureText(mark).width;
  ctx.fillText(mark, w - tw - w * 0.05, Math.round(h * 0.06));

  return canvas;
}

export async function thumbnailPreviewDataUrl(
  input: ThumbnailRenderInput,
): Promise<string> {
  const canvas = await renderThumbnailToCanvas(input);
  return canvas.toDataURL("image/png");
}
