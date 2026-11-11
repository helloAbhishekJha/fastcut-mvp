import { DEMO_TRANSCRIPT_WORDS } from "@/features/trim-silence/transcript-fixture";
import type { TranscriptWord } from "@/features/trim-silence/transcript-fixture";
import { formatCutTime } from "@/features/trim-silence/silence-cuts";

const FILLER_WORDS = new Set(["um", "uh", "like", "ah", "erm"]);

export type FillerCut = {
  start: number;
  end: number;
  word: string;
};

export function isFillerWord(text: string): boolean {
  const normalized = text.toLowerCase().replace(/[^a-z]/g, "");
  return FILLER_WORDS.has(normalized);
}

export function fillerCutsFromTranscript(
  words: TranscriptWord[] = DEMO_TRANSCRIPT_WORDS,
): FillerCut[] {
  return words
    .filter((w) => isFillerWord(w.text))
    .map((w) => ({
      start: w.start,
      end: w.end,
      word: w.text,
    }));
}

export const DEMO_FILLER_CUTS = fillerCutsFromTranscript();

export { formatCutTime };
