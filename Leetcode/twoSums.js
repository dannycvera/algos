const sumTwoNumsBrut = (nums, target) => {
  for (i = 0; i < nums.length; i++) {
    for (x = i + 1; x < nums.length; x++) {
      if (nums[i] + nums[x] === target) {
        return [i, x];
      }
    }
  }
};

var twoSum = function (nums, target) {
  let hash = {};

  let compliment; // stores the value needed to add to nums[i] to equal the target
  for (let i = 0; i < nums.length; i++) {
    compliment = target - nums[i]; // subtract nums[i] from the target

    if (hash[compliment] >= 0) {
      // the value of target - nums[i] is found
      return [hash[compliment], i]; // return the index stored in the hash map followed by the current index
    }
    hash[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
