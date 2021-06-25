// Recursion:
// a function that calls itself
// 1 - base case to stop the recursion
// 2 - action that converges towards the base case
// 3 - recursive call
// 2 and 3 may be on the same line

let nums = [1, 2, 3];

function subsets(nums) {
  const res = [];
  backtrack(0, [], nums, res);
  return res;
}

function backtrack(start, path, nums, res) {
  res.push(path.slice());
  for (let i = start; i < nums.length; i++) {
    path.push(nums[i]);
    backtrack(i + 1, path, nums, res);
    path.pop();
  }
}
console.log(subsets(nums));
//Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
