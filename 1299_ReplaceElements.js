// 1299. Replace Elements with Greatest Element on Right Side
// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

let replaceElements = function(arr) {
    let output = arr.map((current, i) => {
        if (i != arr.length - 1) {
            let range = arr.slice(i + 1, arr.length);
            let currentMax = Math.max(...range);
            return currentMax;
        } else {
            return -1;
        }
    })
    return output;
};
