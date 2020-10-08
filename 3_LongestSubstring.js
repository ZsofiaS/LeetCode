// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

let lengthOfLongestSubstring = function(s) {
    let output = 0;
    let array = s.split('');
    let substring = '';
    if (array.length == 1) {
        output = 1;
    } else {
        array.forEach((letter, i) => {
            substring = letter;
            for (let j = i + 1; j < array.length; j++ ) {
                if (!substring.includes(array[j])) {
                    substring += array[j];
                    if (substring.length > output) {
                        output = substring.length;
                    }
                } else {
                    if (substring.length > output) {
                        output = substring.length;
                    }
                    return;
                } 
            }
        }) 
    }
    return output;
};