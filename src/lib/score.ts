import { Letter, TrackId, LETTER_TO_TRACK } from '../data/quiz';

export interface ScoreResult {
  trackId: TrackId;
  isTie: boolean;
  winnerLetter: Letter | null;
  counts: Record<Letter, number>;
}

export function tallyAnswers(answers: Letter[]): Record<Letter, number> {
  const counts: Record<Letter, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  for (const letter of answers) {
    if (letter in counts) {
      counts[letter] += 1;
    }
  }
  return counts;
}

export function getScoreResult(answers: Letter[]): ScoreResult {
  const counts = tallyAnswers(answers);
  if (answers.length === 0) {
    return {
      trackId: 'entrepreneurship',
      isTie: true,
      winnerLetter: null,
      counts,
    };
  }

  const letters: Letter[] = ['A', 'B', 'C', 'D', 'E'];
  let maxCount = -1;
  for (const l of letters) {
    if (counts[l] > maxCount) {
      maxCount = counts[l];
    }
  }

  const leaders = letters.filter((l) => counts[l] === maxCount);

  // Any tie for highest count (e.g., [2, 2, 1, 0, 0] or [1, 1, 1, 1, 1]) -> entrepreneurship
  if (leaders.length > 1) {
    return {
      trackId: 'entrepreneurship',
      isTie: true,
      winnerLetter: null,
      counts,
    };
  }

  const winnerLetter = leaders[0];
  return {
    trackId: LETTER_TO_TRACK[winnerLetter],
    isTie: false,
    winnerLetter,
    counts,
  };
}

export function score(answers: Letter[]): TrackId {
  return getScoreResult(answers).trackId;
}
