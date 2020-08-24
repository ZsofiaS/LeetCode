// 1295. Find Numbers with Even Number of Digits
// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

let findNumbers = function(nums) {
    let counter = 0;
    nums.forEach(number => {
        number = number.toString();
        if (number.length % 2 == 0) {
            counter++;
        }
    })
    return counter;
};
