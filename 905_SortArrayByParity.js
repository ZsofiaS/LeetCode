// 905. Sort Array By Parity
// https://leetcode.com/problems/sort-array-by-parity/

let sortArrayByParity = function(A) {
    let odd = [];
    let even = [];
    A.forEach(item => {
        if (item % 2 == 0) {
            even.push(item);
        } else {
            odd.push(item);
        }
    })
    return even.concat(odd)
};
