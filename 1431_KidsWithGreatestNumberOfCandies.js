// 1431. Kids With the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

let kidsWithCandies = function(candies, extraCandies) {
     let booleanArray = candies.map(candy => {
         if (candy + extraCandies >= Math.max(...candies)) {
             return true;
         } else {
             return false;
         }
     });
    return booleanArray;
};
