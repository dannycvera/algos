// sliding windows

// merge somthing
let nums = [2, 3, 1, 2, 4, 3];
let target = 7;
function minSubArrayLen(target, nums) {
  let output = 0; // length
  let sum = nums[0];
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (sum >= target) {
      if (output === 0 || output > right - left + 1) {
        output = right - left + 1;
      }
      sum -= nums[left];
      left++;
    } else {
      right++;
      sum += nums[right];
    }
  }
  return output;
}
console.log(minSubArrayLen(target, nums));

let intervals = [
  [1, 4],
  [4, 5],
];
var merge = function (intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  let output = [];
  let lastStart = intervals[0][0];
  let lastEnd = intervals[0][1];
  let currentStart;
  let currentEnd;
  for (let i = 1; i < intervals.length; i++) {
    currentStart = intervals[i][0];
    currentEnd = intervals[i][1];
    if (i !== intervals.length && lastEnd >= currentStart) {
      lastStart = Math.min(currentStart, lastStart);
      lastEnd = Math.max(currentEnd, lastEnd);
    } else {
      output.push([lastStart, lastEnd]);
      lastStart = currentStart;
      lastEnd = currentEnd;
    }
  }
  output.push([lastStart, lastEnd]);
  return output;
};
// console.log(merge(intervals));
