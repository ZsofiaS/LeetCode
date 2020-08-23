// 1281. Subtract the Product and Sum of Digits of an Integer
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

let subtractProductAndSum = function(n) {
    let arr = n.toString().split('');
    let digits = arr.map(Number);
    let sum = digits.reduce((a, c) => a + c);
    let product = digits.reduce((a, c) => a * c);
    return product - sum;
};
