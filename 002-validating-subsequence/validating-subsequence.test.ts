import { validateSubsequence } from './validating-subsequence';

test('validates subsequence', () => {
    expect(
        validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
    ).toBe(true);
});

test('is invalid subsequence and returns false', () => {
    expect(
        validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, 20, 10])
    ).toBe(false);
});

test('returns true', () => {
    expect(
        validateSubsequence([2, 9, 4, 6, 1, 21, 50, 45], [2, 6, 1, 45])
    ).toBe(true);
});

test('returns false for empty subsequence array', () => {
    expect(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [])).toBe(false);
});
