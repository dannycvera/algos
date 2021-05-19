const sumTwoNumsBrut = (nums, target) => {
  for (i = 0; i < nums.length; i++) {
    for (x = i + 1; x < nums.length; x++) {
      if (nums[i] + nums[x] === target) {
        return [i, x];
      }
    }
  }
};

const sumTwoNums = (nums, target) => {
  // const numArr = [];
  for (i = 0; i < nums.length; i++){
    if (nums.has() + nums[x] === target) {
      return [i, x];
    }
  }


}



console.log(sumTwoNums([2, 7, 11, 15], 9));
console.log(sumTwoNums([3, 2, 4], 6));
console.log(sumTwoNums([3, 3], 6));
