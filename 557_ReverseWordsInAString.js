// 557. Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/

let reverseWords = function(s) {
    let words = s.split(' ');
    words.forEach((word, i) => {
        let wordArray = word.split('');
        words[i] = wordArray.reverse().join('');
    })
    let outputString = words.join(' ');
    return outputString;
};
