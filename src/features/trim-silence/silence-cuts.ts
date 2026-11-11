import {
  DEMO_TRANSCRIPT_SEGMENTS,
  DEMO_TRANSCRIPT_WORDS,
  type TranscriptSegment,
  type TranscriptWord,
} from "@/features/trim-silence/transcript-fixture";

export type SilenceCut = {
  start: number;
  end: number;
  duration: number;
  /** Phrase immediately before the dead-air gap */
  afterPhrase?: string;
};

const MIN_SILENCE_SEC = 0.35;

export function formatCutTime(seconds: number): string {
  return `${seconds.toFixed(1)}s`;
}

export function silenceCutsFromSegments(
  segments: TranscriptSegment[],
  minGap = MIN_SILENCE_SEC,
): SilenceCut[] {
  const cuts: SilenceCut[] = [];
  for (let i = 0; i < segments.length - 1; i++) {
    const start = segments[i].end;
    const end = segments[i + 1].start;
    const duration = end - start;
    if (duration >= minGap) {
      cuts.push({
        start,
        end,
        duration,
        afterPhrase: segments[i].text,
      });
    }
  }
  return cuts;
}

/** Infer short gaps between consecutive words (second pass on timeline). */
export function silenceCutsFromWords(
  words: TranscriptWord[],
  minGap = MIN_SILENCE_SEC,
): SilenceCut[] {
  const cuts: SilenceCut[] = [];
  for (let i = 0; i < words.length - 1; i++) {
    const start = words[i].end;
    const end = words[i + 1].start;
    const duration = end - start;
    if (duration >= minGap) {
      cuts.push({
        start,
        end,
        duration,
        afterPhrase: words[i].text,
      });
    }
  }
  return cuts;
}

export function demoSilenceCuts(): SilenceCut[] {
  const fromSegments = silenceCutsFromSegments(DEMO_TRANSCRIPT_SEGMENTS);
  const fromWords = silenceCutsFromWords(DEMO_TRANSCRIPT_WORDS);
  const byKey = new Map<string, SilenceCut>();
  for (const cut of [...fromSegments, ...fromWords]) {
    byKey.set(`${cut.start}-${cut.end}`, cut);
  }
  return [...byKey.values()].sort((a, b) => a.start - b.start);
}

export const DEMO_SILENCE_CUTS = demoSilenceCuts();
