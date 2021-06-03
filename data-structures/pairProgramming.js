/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let squareArr = [];

  for (let i = 0; i < nums.length; i++) {
    squareArr.push(nums[i] * nums[i]);
  }

  return squareArr.sort((a, b) => a - b);
};
