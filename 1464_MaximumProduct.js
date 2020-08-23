// 1464. Maximum Product of Two Elements in an Array
// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/


let maxProduct = function(nums) {
    nums.sort((a, b) => b - a);
    let product = (nums[0] - 1) * (nums[1]-1);
    return product;
};
