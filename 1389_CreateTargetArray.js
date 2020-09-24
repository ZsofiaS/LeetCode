// 1389. Create Target Array in the Given Order
// https://leetcode.com/problems/create-target-array-in-the-given-order/

let createTargetArray = function(nums, index) {
    let target = [];
    for (i = 0; i < nums.length; i++) {
        let ind = index[i];
        let value = nums[i];
        if (target[ind]) {
            let length = target.length;
            for (j = length - 1; j >= ind; j--) {
               target[j + 1] = target[j]; 
            }
        } 
        target[ind] = value; 
    }
    return target;
};