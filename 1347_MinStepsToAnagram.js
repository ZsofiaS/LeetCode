// 1347. Minimum Number of Steps to Make Two Strings Anagram
// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/

let minSteps = function(s, t) {
    let output = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < t.length; j++) {
            if (s[i] === t[j]) {
                t = t.replace(t[j], '');
                break;
            }
        } 
    }
    return t.length;
};