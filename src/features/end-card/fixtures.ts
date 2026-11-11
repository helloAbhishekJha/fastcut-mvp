import type { EndCardAspect, EndCardCopy, EndCardTemplate } from "./types";

/** Default closing-card copy (Doory-style CTA stub). */
export const DEMO_END_CARD: EndCardCopy = {
  headline: "Follow for the full playbook",
  button: "Link in bio",
  subline: "New drops every Tuesday",
};

export const END_CARD_COPY_VARIANTS: EndCardCopy[] = [
  DEMO_END_CARD,
  {
    headline: "Save this before your next shoot",
    button: "Get the template",
    subline: "Free checklist in bio",
  },
  {
    headline: "Ready to scale your content?",
    button: "Start free trial",
    subline: "No card required",
  },
];

export const END_CARD_TEMPLATES: EndCardTemplate[] = [
  {
    id: "doory-gradient",
    label: "Doory gradient",
    description: "Violet fade + bold headline",
    aspects: ["9:16", "1:1"],
    accent: "#A78BFA",
    background: "linear-gradient(165deg, #1e1b4b 0%, #4c1d95 45%, #0f172a 100%)",
  },
  {
    id: "doory-minimal",
    label: "Doory minimal",
    description: "Dark frame + thin CTA pill",
    aspects: ["9:16", "1:1"],
    accent: "#34D399",
    background: "#0a0a0a",
  },
  {
    id: "doory-bold",
    label: "Doory bold",
    description: "High-contrast block CTA",
    aspects: ["9:16", "1:1"],
    accent: "#F472B6",
    background: "#18181b",
  },
];

export function endCardDimensions(aspect: EndCardAspect): { w: number; h: number } {
  return aspect === "9:16" ? { w: 1080, h: 1920 } : { w: 1080, h: 1080 };
}
