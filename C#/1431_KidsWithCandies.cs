// 1431. Kids With the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
// initialise output array with the length of candies.Length
// iterate through array
// upon every iteration check if candies[i] + extraCandies >= max element in candies
// push boolean value to output array
// return output array

public class Solution {
    public IList<bool> KidsWithCandies(int[] candies, int extraCandies) {
       int length = candies.Length;
       bool[] output = new bool[length];
       int max = candies.Max();
       for (int i = 0; i < length; i++) {
           output[i] = (candies[i] + extraCandies) >= max;
       }
       return output;
    }
}