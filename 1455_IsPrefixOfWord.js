// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/

let isPrefixOfWord = function(sentence, searchWord) {
    let array = sentence.split(' ');
    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith(searchWord)) {
            return i + 1;
        }
    }
    return -1;
};