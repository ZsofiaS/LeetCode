// 709. To Lower Case
// https://leetcode.com/problems/to-lower-case/
// split string
// iterate through string
    // turn each letter into lowercase equivalent if not lowercase yet
// join string & return 

let toLowerCase = function(str) {
    let lowerCaseArray = str.split('').map(letter => {
        let character = letter.charCodeAt(0);
        if (character > 64 && character < 91) {
            return String.fromCharCode(character + 32);
        } else {
            return letter;
        }
    })
    return lowerCaseArray.join('');
};