// 1502. Can Make Arithmetic Progression From Sequence
// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/

let canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b) => a - b);
    let diff = arr[0] - arr[1];
    let output = true;
    for (let i =1; i < arr.length -1; i++) {
        let newDiff = arr[i] - arr[i + 1];
        if (diff != newDiff) {
            output = false;
            break;
        }
    };
    return output;
};
