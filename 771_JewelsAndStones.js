// 771. Jewels and Stones
// https://leetcode.com/problems/jewels-and-stones/

let numJewelsInStones = function(J, S) {
    let numberOfJewels = 0;
    let JArr = J.split('');
    let SArr = S.split('');
    JArr.forEach(jewel => {
        SArr.forEach(stone => {
            if (jewel == stone) {
                numberOfJewels++;
            };
        });
    }); 
    return numberOfJewels;
};
