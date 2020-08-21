// 1480. Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array/

let runningSum = function(nums) {
    let outputNums = [];
    nums.forEach((number, index) => {
        let sumOfNums = 0;
        for (let i = 0; i <= index; i++) {
            sumOfNums = sumOfNums + nums[i];
        };
        outputNums.push(sumOfNums);
    });
    return outputNums;
};
