import { describe, it, expect } from 'vitest';
import { score, getScoreResult, tallyAnswers } from './score';

describe('tallyAnswers', () => {
  it('correctly counts frequency of each letter', () => {
    const counts = tallyAnswers(['A', 'A', 'B', 'C', 'D']);
    expect(counts).toEqual({ A: 2, B: 1, C: 1, D: 1, E: 0 });
  });

  it('handles empty answers array', () => {
    const counts = tallyAnswers([]);
    expect(counts).toEqual({ A: 0, B: 0, C: 0, D: 0, E: 0 });
  });
});

describe('score and tie rules', () => {
  it('awards Consulting to majority A', () => {
    expect(score(['A', 'A', 'A', 'B', 'C'])).toBe('consulting');
    const res = getScoreResult(['A', 'A', 'A', 'B', 'C']);
    expect(res.winnerLetter).toBe('A');
    expect(res.isTie).toBe(false);
  });

  it('awards Marketing to majority B', () => {
    expect(score(['B', 'B', 'B', 'A', 'C'])).toBe('marketing');
    const res = getScoreResult(['B', 'B', 'B', 'A', 'C']);
    expect(res.winnerLetter).toBe('B');
    expect(res.isTie).toBe(false);
  });

  it('awards Operations to majority C', () => {
    expect(score(['C', 'C', 'C', 'D', 'E'])).toBe('operations');
    const res = getScoreResult(['C', 'C', 'C', 'D', 'E']);
    expect(res.winnerLetter).toBe('C');
    expect(res.isTie).toBe(false);
  });

  it('awards Finance to majority D', () => {
    expect(score(['D', 'D', 'D', 'A', 'B'])).toBe('finance');
    const res = getScoreResult(['D', 'D', 'D', 'A', 'B']);
    expect(res.winnerLetter).toBe('D');
    expect(res.isTie).toBe(false);
  });

  it('awards Entrepreneurship to majority E', () => {
    expect(score(['E', 'E', 'E', 'A', 'B'])).toBe('entrepreneurship');
    const res = getScoreResult(['E', 'E', 'E', 'A', 'B']);
    expect(res.winnerLetter).toBe('E');
    expect(res.isTie).toBe(false);
  });

  it('resolves an even spread A-B-C-D-E to Entrepreneurship', () => {
    expect(score(['A', 'B', 'C', 'D', 'E'])).toBe('entrepreneurship');
    const res = getScoreResult(['A', 'B', 'C', 'D', 'E']);
    expect(res.isTie).toBe(true);
    expect(res.winnerLetter).toBeNull();
  });

  it('resolves a 2-way tie for highest (e.g. A:2, B:2, C:1) to Entrepreneurship', () => {
    expect(score(['A', 'A', 'B', 'B', 'C'])).toBe('entrepreneurship');
    const res = getScoreResult(['A', 'A', 'B', 'B', 'C']);
    expect(res.isTie).toBe(true);
    expect(res.winnerLetter).toBeNull();
  });

  it('resolves other 2-way ties (e.g. C:2, D:2, E:1) to Entrepreneurship', () => {
    expect(score(['C', 'C', 'D', 'D', 'E'])).toBe('entrepreneurship');
    const res = getScoreResult(['C', 'C', 'D', 'D', 'E']);
    expect(res.isTie).toBe(true);
  });
});
