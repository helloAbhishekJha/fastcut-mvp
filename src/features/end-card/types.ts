export type EndCardAspect = "9:16" | "1:1";

export type EndCardTemplateId = "doory-gradient" | "doory-minimal" | "doory-bold";

export type EndCardTemplate = {
  id: EndCardTemplateId;
  label: string;
  description: string;
  aspects: EndCardAspect[];
  accent: string;
  background: string;
};

export type EndCardCopy = {
  headline: string;
  button: string;
  subline?: string;
};

export type EndCardRenderInput = {
  template: EndCardTemplate;
  aspect: EndCardAspect;
  copy: EndCardCopy;
  brandName?: string;
};
