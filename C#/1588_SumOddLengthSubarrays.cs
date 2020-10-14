// 1588. Sum of All Odd Length Subarrays
// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/

// initialise int output 0
// iterate through array
    // upon every iteration
        // initialise sum starting at 0, and currentSum 0
        // iterate through array
            // add current element to currentSum
            // if subarray is of odd length, add currentSum to sum
        // add sum to output
// return output

public class Solution {
    public int SumOddLengthSubarrays(int[] arr) {
        int output = 0;
        int sum = 0;
        int currentSum = 0;
        for (int i = 0; i < arr.Length; i++) {
            sum = 0;
            currentSum = 0;
            for (int j = i; j < arr.Length; j++) {
                currentSum += arr[j];
                if ((j - i) % 2 == 0) {
                   sum += currentSum; 
                }
            }
            output += sum;
        }
        return output;
    }
}