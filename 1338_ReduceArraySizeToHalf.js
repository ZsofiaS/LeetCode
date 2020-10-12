// 1338. Reduce Array Size to The Half
// https://leetcode.com/problems/reduce-array-size-to-the-half/

let minSetSize = function(arr) {
    let map = {};
    let counter = 0;
    let array = [];
    for (let item of arr) {
        map[item] = map[item] + 1 || 1;
    }
    for (let key in map) {
        array.push([key, map[key]]);
    }
    array.sort((a, b) => {
        return a[1] - b[1];
    });
    let sum = arr.length;
    for (let item of array) {
        sum -= array.pop()[1];
        counter++;
        if (sum <= arr.length / 2) {
            break;
        }
    }
    return counter;
};