// 1408. String Matching in an Array
// https://leetcode.com/problems/string-matching-in-an-array/

let stringMatching = function(words) {
    let output = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++ ) {
            if (words[i].includes(words[j]) && !output.includes(words[j])) {
                output.push(words[j])
            } else if (words[j].includes(words[i]) && !output.includes(words[i])) {
                output.push(words[i]);
            }
        }
    }
    return output;
};