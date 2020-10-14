// 1480. Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array/
// initialise output array
// initialise a sum int var, starting 0
// iterate through the array
// on every iteration add current value to sum & push it to array 
// return the array

public class Solution {
    public int[] RunningSum(int[] nums) {
        int[] output = new int[nums.Length];
        int sum = 0;
        for (int i = 0; i < nums.Length; i++) {
            sum += nums[i];
            output[i] = sum;
        }
        return output;
    }
}