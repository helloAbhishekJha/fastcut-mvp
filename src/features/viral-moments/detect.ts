import { VIRAL_MOMENTS_FIXTURE } from "@/features/viral-moments/fixture";
import type {
  ViralMomentClip,
  ViralMomentPlatform,
  ViralMomentsPipelineResult,
} from "@/features/viral-moments/types";

const PLATFORMS: ViralMomentPlatform[] = ["Reels", "Shorts", "TikTok"];

function preferredPlatformOrder(brief: string): ViralMomentPlatform[] {
  const b = brief.toLowerCase();
  const order: ViralMomentPlatform[] = [];
  if (/tik\s*tok|tiktok/.test(b)) order.push("TikTok");
  if (/reel|instagram|ig\b/.test(b)) order.push("Reels");
  if (/short|youtube|yt\b/.test(b)) order.push("Shorts");
  for (const p of PLATFORMS) {
    if (!order.includes(p)) order.push(p);
  }
  return order;
}

function topicSnippet(brief: string): string {
  const words = brief.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "your hook";
  const slice = words.slice(0, 4).join(" ");
  return slice.length > 36 ? `${slice.slice(0, 33)}…` : slice;
}

function scoreFromBrief(brief: string, slot: number): number {
  const len = brief.trim().length;
  const base = 78 + Math.min(14, Math.floor(len / 12));
  return Math.min(97, base - slot * 2);
}

/** Simple heuristics: nudge windows from brief length + keyword hooks (ClipFlow-style stub). */
export function detectViralMomentsFromBrief(brief: string): ViralMomentClip[] {
  const trimmed = brief.trim();
  if (!trimmed) return [];

  const platforms = preferredPlatformOrder(trimmed);
  const topic = topicSnippet(trimmed);
  const hasUrgency = /\b(now|free|launch|secret|stop)\b/i.test(trimmed);
  const offset = Math.min(4, Math.floor(trimmed.length / 40));

  const templates = [
    {
      start: 2.5 + offset * 0.3,
      duration: 4.2,
      label: hasUrgency ? "Urgency hook" : "Cold open hook",
    },
    {
      start: 14 + offset * 0.5,
      duration: 5.5,
      label: `Payoff · ${topic}`,
    },
    {
      start: 32 + offset * 0.4,
      duration: 4.8,
      label: "Shareable CTA moment",
    },
  ];

  return templates.map((t, i) => ({
    start: Math.round(t.start * 10) / 10,
    end: Math.round((t.start + t.duration) * 10) / 10,
    score: scoreFromBrief(trimmed, i),
    label: t.label,
    platform: platforms[i % platforms.length]!,
  }));
}

export function runViralMomentsPipeline(brief: string): ViralMomentsPipelineResult {
  const fromBrief = detectViralMomentsFromBrief(brief);
  if (fromBrief.length > 0) {
    return { clips: fromBrief, source: "brief-heuristic" };
  }
  return { clips: VIRAL_MOMENTS_FIXTURE, source: "fixture" };
}
