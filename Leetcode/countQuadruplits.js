var countQuadruplets = function (nums) {
  return dfs(nums);
};

var dfs = function dfs(nums, i = 0, sum = 0, count = 1, output = 0) {
  if (count > 4 || i >= nums.length - 4 + count) {
    // if the index is past the possibility of getting 4 elements
    return output;
  }
  // checks the two possible paths.
  // Either add to the sum and increase the count and move to the next index,
  // or skip to the next index without updating anything
  let newOutput1 = dfs(nums, i + 1, sum + nums[i], count + 1, output) - output;
  let newOutput2 = dfs(nums, i + 1, sum, count, output) - output;
  if (count === 4 && sum === nums[i]) {
    output += 1;
  }
  return newOutput1 + newOutput2 + output; //subtract only two output and not three since the other newOutput will have that old output value inside it
};

let nums = [28, 8, 49, 85, 37, 90, 20, 8];
console.log(countQuadruplets(nums));
// [28, 8, 49, 85, 37, 90, 20, 8]
// [8, 8, 20, 28, 37, 49, 85, 90] after sorting
// 20, 28, 37, 85
// 8, 28, 49, 85
// there are two 8's so the total number of quadruplets is 3
// but leetcode is telling me there is only one quadruplets in this set of nums.
