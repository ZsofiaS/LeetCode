// 1207. Unique Number of Occurrences
// https://leetcode.com/problems/unique-number-of-occurrences/

let uniqueOccurrences = function(arr) {
    let countsObj = {};
    arr.forEach(item => {
        if (countsObj[item]) {
            countsObj[item] = countsObj[item] + 1;
        } else {
            countsObj[item] = 1;
        }
    });
    let output = true;
    let count = Object.values(countsObj);
    count.forEach((current, i) => {
        count.forEach((item, j) => {
            if (current == item && i != j) {
                output = false;
            }
        })
    })
    return output;
};
