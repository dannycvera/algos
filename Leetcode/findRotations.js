/*
Find the number of rotations in a circularly sorted array


Input:  nums = [8, 9, 10, 2, 5, 6]
Output: The array is rotated 3 times
 
 
Input:  nums = [2,  10]
Output: The array is rotated 0 times


*/

// too slow
// use binary search
// const findRotations = (arr) => {
//   if (arr.length < 2) {
//     return 0;
//   }

//   let cur = arr[1];
//   let prev = arr[0];
//   let min = [prev, 0]; // [value,index]
//   let max = [-Infinity];
//   for (let i = 1; i < arr.length; i++) {
//     cur = arr[i];
//     if (prev > cur) {
//       min = [cur, i];
//       max = [prev, i - 1];
//       break;
//     } else {
//       max = [cur, i];
//     }
//   }
//   let rotations = arr.length - min[1];

//   if (arr.length === rotations) {
//     return 0;
//   }
//   return rotations;
// };
const findRotations = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  if (nums[left] <= nums[right]) {
    return left;
  }
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let next = (mid + 1) % nums.length;
    let prev = (mid - 1) % nums.length;
    if (nums[mid] <= nums[next] && nums[mid] <= nums[prev]) {
      return mid;
    } else if (nums[mid] <= nums[right]) {
      right = mid - 1;
    } else if (nums[mid] >= nums[left]) {
      left = mid + 1;
    }
  }
  return -1;
};

let nums = [10, 2, 5, 6, 8, 9];
let nums = [6, 8, 9, 10, 2, 5];
console.log(findRotations(nums));
