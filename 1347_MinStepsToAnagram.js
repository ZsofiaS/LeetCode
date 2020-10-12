// 1347. Minimum Number of Steps to Make Two Strings Anagram
// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/

// more efficient solution
let minSteps = function(s, t) {
    let map = {};
    let counter = 0;
    for (let letter in s) {
        map[letter] = map[letter] + 1 || 1;
    }
    for (let letter in t) {
        if (map[letter]) {
            map[letter]--;
            continue;
        }
        counter++;
    }
    return counter;
};