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
