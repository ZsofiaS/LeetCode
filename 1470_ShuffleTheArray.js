// 1470. Shuffle the Array
// https://leetcode.com/problems/shuffle-the-array/

let shuffle = function(nums, n) {
    let outputArray = [];
    let firstHalf = nums.splice(0, n);
    let secondHalf = nums.splice(-n);
    for (let i = 0; i < firstHalf.length; i++) {
        outputArray.push(firstHalf[i]);
        outputArray.push(secondHalf[i]);
    }
    return outputArray;
};
