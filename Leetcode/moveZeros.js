var moveZeroes = function (nums) {
  let temp;
  let i = 0;
  let nonZero = 0;

  // loops and checks i for non-zero numbers.
  // The nonZero index is left at zero numbers to be replaced with nonZero's in the future.
  // Then swaps the element at nonZero with the element at i
  while (i < nums.length) {
    if (nums[i] !== 0) {
      temp = nums[i];
      nums[i] = nums[nonZero];
      nums[nonZero] = temp;
      nonZero++;
    }
    i++;
  }
  return nums;
};
let nums = [0, 1, 0, 3, 12];
//         [1, 3, 12, 0, 0];
//                       i
//                    n
console.log(moveZeroes(nums));
