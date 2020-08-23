// 1528. Shuffle String
// https://leetcode.com/problems/shuffle-string/

let restoreString = function(s, indices) {
    let arr = [];
    s.split("").forEach((letter, i) => {
        arr[indices[i]] = letter;
    });
    return arr.join("");
};
