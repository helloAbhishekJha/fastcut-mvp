const EMOJI_SUFFIXES = ["✨", "🔥", "👀", "💡", "🎬"];

/** Add light emoji decoration for demo/fixture captions when enabled. */
export function withCaptionEmojis(text: string, index: number): string {
  const suffix = EMOJI_SUFFIXES[index % EMOJI_SUFFIXES.length];
  if (text.includes(suffix)) return text;
  return `${text} ${suffix}`;
}

export function stripCaptionEmojis(text: string): string {
  return text.replace(
    /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu,
    "",
  ).replace(/\s{2,}/g, " ").trim();
}
