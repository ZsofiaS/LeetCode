// 1047. Remove All Adjacent Duplicates In String
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

let removeDuplicates = function(S) {
    let array = S.split('');
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === array[i+1]) {
            array.splice(i+1, 1);
            array.splice(i, 1);
            S = array.join('');
            i = -1;
        }   
    }
    return S;
};