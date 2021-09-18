var sortedSquares = function (nums) {
  if (nums.length === 1) {
    nums[0] = nums[0] * nums[0];
    return nums;
  }
  let i = 0;
  let j = nums.length - 1;
  const results = new Array(j);
  let iSquared = false;
  let jSquared = false;
  for (var r = j; r >= 0; r--) {
    if (!iSquared && i !== j) {
      nums[i] = nums[i] * nums[i];
      iSquared = true;
    }
    if (!jSquared && i !== j) {
      nums[j] = nums[j] * nums[j];
      jSquared = true;
    }
    if (nums[i] > nums[j]) {
      results[r] = nums[i];
      i++;
      iSquared = false;
    } else {
      results[r] = nums[j];
      j--;
      jSquared = false;
    }
  }

  return results;
};

// var sortedSquares = function(nums) {
//     // use insertion sort
//     const results = new Array(nums.length - 1);
//     let holder;
//     let left = 0;
//     let right = nums.length - 1;

//     for(let i = right; i >= 0; i--){

//         if(Math.abs(nums[left]) > Math.abs(nums[right])){
//             nums[left] = nums[left] * nums[left];
//             results[i] = nums[left];
//             left++;
//         } else {
//             nums[right] = nums[right] * nums[right];
//             results[i] = nums[right];
//             right--;
//         }
//     }

//     return results;
// };
// push which ever is smaller
// once an element is pushed
// move the corrisponding index over one
// [16, 9, 1, 2, 10]
//         i
//            j
