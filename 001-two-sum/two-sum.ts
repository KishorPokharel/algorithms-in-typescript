/*
Given the array of numbers and a target sum write a function
that returns an array of two numbers whose sum is the target sum
*/

export function twoSum(arr: number[], targetSum: number): number[] {
    let table = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (table[targetSum - num]) {
            return [targetSum - num, num];
        } else {
            table[num] = true;
        }
    }
    return [];
}
