const searchCircular = (nums, target) => {
  //binary search in a circular manner
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    // circular location of the next and previous element from the middle
    // if the middle is the target return the middle index
    if (nums[mid] === target) {
      return mid;
    }
    // ----works, but trying a different direction----------
    //// right side is sorted and target is found in the right side
    // if (nums[mid] < target && nums[right] >= target) {
    //   left = mid + 1;
    // } else if (nums[mid] > target && nums[left] <= target) {
    //// left side is sorted and target is found in the left
    //   right = mid - 1;
    // } else if (nums[left] <= target && nums[right] <= target) {
    //// if both left and right are less than target then target is not in the right
    //// since we already checked for that earlier
    //// left side is wrapping around and target is probably in the left
    ////
    // right = mid - 1;
    // } else if (nums[right] >= target && nums[left] >= target) {
    //// right side is wrapping around and target is found in the right
    //   left = mid + 1;
    // }
    //-------------------
    if (nums[mid] < nums[right]) {
      //right side is sorted
      if (nums[mid] < target && target <= nums[right]) {
        // target is in the sorted right side
        left = mid + 1;
      } else {
        // target is in the left unsorted side
        right = mid - 1;
      }
    } else {
      // left side is sorted
      if (nums[mid] > target && target >= nums[left]) {
        // target is found in the sorted left side
        right = mid - 1;
      } else {
        // target is in the right unsorted side
        left = mid + 1;
      }
    }
  }
  return -1;
};

let array = [9, 10, 2, 5, 6, 8];
// let array = [2, 5, 6, 8, 9, 10];
let num = 10;
console.log(searchCircular(array, num));
/*
[9, 10, 2, 5, 6, 8]

[5, 6, 8, 9, 10, 2, 3, 4];
*/
