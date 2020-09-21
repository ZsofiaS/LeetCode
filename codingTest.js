// With a given array, find the smallest x for which the following is true: 
// Starting with x and going through the array, the running sum of the array is never smaller than 1
// Return smallest possible x
//
// Example: 
// Input: [-2, 3, 1, -5]
// Output: 4
// Explanation: Starting with 4, the running sums of the array are: 2, 5, 6, 1
//
// This was a timed coding test I did as part of the recruitment process for a junior full-stack developer role.


function findX(arr) {
    function findSmallest() {
        let smallestPositive = Math.max(...arr);
        arr.forEach(number => {
            if (number > 0 && number < smallestPositive) {
                smallestPositive = number;
            }
        })
        return smallestPositive;
    }
    let x = findSmallest();
    let result;
   
    function find(x) {
        let sum = x;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]; 
            console.log("x:" + x)
            if (sum < 1) {
                x = x + 1;
                find(x);
                break;
            } 
            result = x;
        }
        return result;
    }

    return find(x);
}