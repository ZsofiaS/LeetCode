// 728. Self Dividing Numbers
// https://leetcode.com/problems/self-dividing-numbers/

let selfDividingNumbers = function(left, right) {
    let output = [];
    for (current = left; current <= right; current++) {
        if (current < 10 && current != 0) {
            output.push(current);
        } else if (current > 10) {
            let arr = current.toString().split('');
            let digits = arr.map(Number);
            let divisible = true;
            digits.forEach(digit => {
                if (current % digit != 0) {
                   divisible = false;
                }
            })
            if (divisible == true) {
                output.push(current)
            }
        }
    }
    return output;
};
