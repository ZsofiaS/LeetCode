// 1374. Generate a String With Characters That Have Odd Counts
// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/

let generateTheString = function(n) {
    let output = '';
    if (n % 2 != 0) {
        for (let i = 0; i < n; i++) {
            output += "a";
        }
    } else {
        for (let i = 1; i < n; i++) {
            output += "a";
        }
        output += "b";
    }
    return output;
};

let generateTheString2 = function(n) {
    if (n % 2 != 0) {
        return "a".repeat(n);
    } else {
        return ("a").repeat(n-1) + "b"; 
    }
};