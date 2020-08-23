// 1323. Maximum 69 Number
// https://leetcode.com/problems/maximum-69-number/

let maximum69Number  = function(num) {
    let arr = num.toString().split('');
    let digits = arr.map(Number);
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] == 6) {
            digits[i] = 9;
            break;
        }
    }
    arr = digits.map(digit  => digit.toString());
    return Number(arr.join(""));
};
