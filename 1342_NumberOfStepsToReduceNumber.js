// 1342. Number of Steps to Reduce a Number to Zero
// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

let numberOfSteps  = function(num) {
    let counter = 0;
    while (num > 0) {
        if (num % 2 != 0) {
            num--;
        } else {
            num = num / 2;
        }
        counter++;
    }
    return counter;
};
