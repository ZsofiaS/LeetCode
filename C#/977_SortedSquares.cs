// 977. Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/

// initialise output array
// iterate through array
    // upon every iteration square the current element & add to output array
// sort & return output array

public class Solution {
    public int[] SortedSquares(int[] A) {
        int[] output = new int[A.Length];
        for (int i = 0; i < A.Length; i++) {
            output[i] = A[i] * A[i];
        }
        Array.Sort(output);
        return output;   
    }
}