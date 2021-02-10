import { twoSum } from './two-sum';

test('two sum works', () => {
    expect(twoSum([1, 2, 9, 4, 5, 8], 12)).toEqual([4, 8]);
});

test('should return empty array', () => {
    expect(twoSum([1, 4, 3, 7, 8], 20)).toEqual([]);
});
