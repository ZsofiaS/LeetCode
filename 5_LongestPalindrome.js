// 5. Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/
// suboptimal, time limit exceeds

let longestPalindrome = function(s) {
    let array = s.split('');
    let output = '';
    let substring;
    let reverse;
    array.forEach((letter, i) => {
        substring = [];
        if (array.length - i < output.length) {
            return;
        }
        for (let j = i; j < array.length; j++) {
            substring.push(array[j]);
            reverse = substring.slice().reverse();
            if ((substring.length > output.length) && (JSON.stringify(substring) === JSON.stringify(reverse))) {
                output = substring.join('');
            }
        }
    })
    return output;
};