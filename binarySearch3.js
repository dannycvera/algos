var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (left <= right) {
    console.log(left, middle, right);
    if (nums[middle] > target) {
      right = middle - 1;
      middle = Math.floor((left + right) / 2);
    } else if (nums[middle] < target) {
      left = middle + 1;
      middle = Math.floor((left + right) / 2);
    } else if (nums[middle] === target) {
      return middle;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 12));
