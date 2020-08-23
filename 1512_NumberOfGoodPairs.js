// 1512. Number of Good Pairs
// https://leetcode.com/problems/number-of-good-pairs/

let numIdenticalPairs = function(nums) {
    let counter = 0;
    nums.forEach((current, i) => {
        nums.forEach((element, j) => {
            if (i < j && current == element) {
                counter++;
            }
        })
    })
    return counter;
};
