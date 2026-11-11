export type ThumbnailAspect = "9:16" | "1:1";

export type ThumbnailPick = {
  t: number;
  score: number;
  note: string;
};

export type ThumbnailRenderInput = {
  video: HTMLVideoElement;
  pick: ThumbnailPick;
  aspect: ThumbnailAspect;
  watermark?: string;
};
