/*
Find the number of rotations in a circularly sorted array


Input:  nums = [8, 9, 10, 2, 5, 6]
Output: The array is rotated 3 times
 
 
Input:  nums = [2,  10]
Output: The array is rotated 0 times


*/

// too slow
// use binary search
const findRotations = (arr) => {
  if (arr.length < 2) {
    return 0;
  }

  let cur = arr[1];
  let prev = arr[0];
  let min = [prev, 0]; // [value,index]
  let max = [-Infinity];
  for (let i = 1; i < arr.length; i++) {
    cur = arr[i];
    if (prev > cur) {
      min = [cur, i];
      max = [prev, i - 1];
      break;
    } else {
      max = [cur, i];
    }
  }
  let rotations = arr.length - min[1];

  if (arr.length === rotations) {
    return 0;
  }
  return min[1];
};

let nums = [6, 8, 9, 10, 2, 5];
console.log(findRotations(nums));
