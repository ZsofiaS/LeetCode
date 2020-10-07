// 442. Find All Duplicates in an Array
// https://leetcode.com/problems/find-all-duplicates-in-an-array/

// 1. create output array
// 2. iterate through array: 
// 3. save current number's index in variable
// 4. iterate through array again:
// 5. if current number & number compared to it is the same: 
// 6. add it to output array & remove the duplicate
// 7. return output

let findDuplicates = function(nums) {
    let outPut = [];
    nums.forEach((num, i) => {
        let numIndex = nums.indexOf(num);
        for (let j = numIndex; j < nums.length -1; j++) {
            if (num == nums[j + 1]) {
                outPut.push(num);
                nums.splice(j + 1, 1);
            }
        }
    })
    return outPut;
};