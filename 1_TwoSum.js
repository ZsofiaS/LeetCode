// 1. Two Sum
// https://leetcode.com/problems/two-sum/submissions/

// brute force:
let twoSum = function(nums, target) {
    let output = [];
    nums.forEach((number, index) => {
        for (let i = index + 1; i < nums.length; i++) {
            if (number + nums[i] == target) {
                output.push(index, i);
            }
        }
    })
    return output;
};
