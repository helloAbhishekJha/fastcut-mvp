import { endCardDimensions } from "./fixtures";
import type { EndCardRenderInput, EndCardTemplateId } from "./types";

function parseGradientStops(background: string): [string, string, string] | null {
  const m = background.match(
    /linear-gradient\([^,]+,\s*([^)]+)\s+0%,\s*([^)]+)\s+\d+%,\s*([^)]+)\s+100%\)/,
  );
  if (!m) return null;
  return [m[1].trim(), m[2].trim(), m[3].trim()];
}

function fillBackground(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  template: EndCardRenderInput["template"],
) {
  if (template.background.startsWith("linear-gradient")) {
    const stops = parseGradientStops(template.background);
    const grad = ctx.createLinearGradient(0, 0, w * 0.4, h);
    if (stops) {
      grad.addColorStop(0, stops[0]);
      grad.addColorStop(0.45, stops[1]);
      grad.addColorStop(1, stops[2]);
    } else {
      grad.addColorStop(0, "#1e1b4b");
      grad.addColorStop(1, "#0f172a");
    }
    ctx.fillStyle = grad;
  } else {
    ctx.fillStyle = template.background;
  }
  ctx.fillRect(0, 0, w, h);
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

export function renderEndCardToCanvas(
  input: EndCardRenderInput,
): HTMLCanvasElement {
  const { w, h } = endCardDimensions(input.aspect);
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  fillBackground(ctx, w, h, input.template);

  const pad = Math.round(w * 0.08);
  const innerW = w - pad * 2;

  if (input.template.id === "doory-minimal") {
    ctx.strokeStyle = "rgba(255,255,255,0.12)";
    ctx.lineWidth = 4;
    ctx.strokeRect(pad, pad, innerW, h - pad * 2);
  }

  if (input.template.id === "doory-bold") {
    ctx.fillStyle = input.template.accent;
    ctx.globalAlpha = 0.15;
    ctx.fillRect(0, h * 0.62, w, h * 0.38);
    ctx.globalAlpha = 1;
  }

  const brand = input.brandName ?? "FastCut";
  ctx.fillStyle = "rgba(255,255,255,0.55)";
  ctx.font = `600 ${Math.round(w * 0.032)}px system-ui,sans-serif`;
  ctx.fillText(brand.toUpperCase(), pad, pad + w * 0.04);

  ctx.fillStyle = "#ffffff";
  ctx.font = `800 ${Math.round(w * 0.09)}px system-ui,sans-serif`;
  const headlineLines = wrapText(ctx, input.copy.headline, innerW);
  let y = h * 0.38;
  for (const line of headlineLines) {
    ctx.fillText(line, pad, y);
    y += w * 0.11;
  }

  if (input.copy.subline) {
    ctx.fillStyle = "rgba(255,255,255,0.72)";
    ctx.font = `500 ${Math.round(w * 0.042)}px system-ui,sans-serif`;
    ctx.fillText(input.copy.subline, pad, y + w * 0.02);
    y += w * 0.08;
  }

  const btnH = Math.round(w * 0.12);
  const btnW = Math.min(innerW, Math.round(w * 0.72));
  const btnY = h - pad - btnH - w * 0.06;
  const btnX = (w - btnW) / 2;

  ctx.fillStyle = input.template.accent;
  roundRect(ctx, btnX, btnY, btnW, btnH, btnH / 2);
  ctx.fill();

  ctx.fillStyle = input.template.id === "doory-bold" ? "#0a0a0a" : "#ffffff";
  ctx.font = `700 ${Math.round(w * 0.038)}px system-ui,sans-serif`;
  const btnText = input.copy.button;
  const tw = ctx.measureText(btnText).width;
  ctx.fillText(btnText, btnX + (btnW - tw) / 2, btnY + btnH * 0.66);

  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.font = `400 ${Math.round(w * 0.028)}px system-ui,sans-serif`;
  ctx.fillText("End card · demo export", pad, h - pad * 0.6);

  return canvas;
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

export function endCardPreviewDataUrl(input: EndCardRenderInput): string {
  return renderEndCardToCanvas(input).toDataURL("image/png");
}

export function defaultTemplateForAspect(
  aspect: EndCardRenderInput["aspect"],
  templates: EndCardRenderInput["template"][],
): EndCardRenderInput["template"] {
  return (
    templates.find((t) => t.aspects.includes(aspect)) ?? templates[0]!
  );
}

export function isEndCardTemplateId(v: string): v is EndCardTemplateId {
  return v === "doory-gradient" || v === "doory-minimal" || v === "doory-bold";
}
