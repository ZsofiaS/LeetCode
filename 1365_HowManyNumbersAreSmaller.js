// 1365. How Many Numbers Are Smaller Than the Current Number
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

let smallerNumbersThanCurrent = function(nums) {
    let output = [];
    nums.forEach((current, i) => {
        let smaller = 0;
        nums.forEach((num, j) => {
            if (current > num && i != j) {
                smaller++;
            }
        });
        output.push(smaller);
    });
    return output;
};
