/* 
Given two array of numbers, write a function that 
returns true if the second array is a valid subsequence of the first array.

A valid subsequence of an array(say a1) is an array of elements whose all
elements belong to the array(a1) which is derived by deleting some or none
elements without changing their order.
*/

export function validateSubsequence(arr: number[], subarr: number[]): boolean {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        let firstElement = subarr[j];
        if (arr[i] === firstElement) {
            j++;
            if (j === subarr.length - 1) {
                return true;
            }
        }
    }
    return false;
}
