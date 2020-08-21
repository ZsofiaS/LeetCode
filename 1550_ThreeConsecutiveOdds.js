// 1550. Three Consecutive Odds
// https://leetcode.com/problems/three-consecutive-odds/

let threeConsecutiveOdds = function(arr) {
    let returnBoolean = false;
    arr.forEach((item, index) => {
        let next = arr[index+1];
        let nextNext = arr[index+2];
        if (item % 2 != 0  &&  index < arr.length -2) {
            if (next % 2 != 0 && nextNext % 2 != 0) {
                returnBoolean = true;
            }
        }
    })
    return returnBoolean;
};
