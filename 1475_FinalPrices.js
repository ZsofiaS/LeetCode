// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
// 1475. Final Prices With a Special Discount in a Shop

let finalPrices = function(prices) {
    let output = [];
    prices.forEach((current, i) => {
        for (let j = 0; j < prices.length; j++) {
            if (prices[j] <= current && j > i) {
                output.push(current - prices[j]);
                break;
            }
        }
        if (output.length == i) {
            output.push(current);
        }
    });
    return output;
};
