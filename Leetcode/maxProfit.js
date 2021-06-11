/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0]; // holds the minimum price
  let maxProfit = 0; // holds the maximum profit, the difference between the minPrice and the current price

  // if a lower price is found than the minimum price, the
  for (let i = 0; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }

    // also works
    // minPrice = Math.min(minPrice, prices[i]);
    // maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
};

let prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));
