const array = [2, 7, 11, 15];
let number = 9;
// use two pointers. One starting at the begining and another at the end.
// if the sum is greater. move the end pointer backwards.
// if the sum is less than, move the begining pointer forward.
function twoSum(arr, num) {
  let end = arr.length - 1;
  let start = 0;
  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum > num) {
      end--;
    } else if (sum < num) {
      start++;
    } else if (sum === num) {
      return [start + 1, end + 1];
    }
  }
  return undefined;
}
console.log(twoSum(array, number));

function twoSumsHash(numbers, target) {
  const obj = {};
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (obj[numbers[i]]) return [obj[numbers[i]] + 1, i + 1];
    obj[target - numbers[i]] = i;
    console.log(obj);
  }
}
var numbers = [2, 3, 4, 5, 8, 10, 11];
var target = 17;
console.log(twoSumsHash(numbers, target));

// var removeDuplicates = function (nums) {
//   let first = 0;
//   let second = 1;
//   while (second < nums.length) {
//     if (nums[first] === nums[second]) {
//       nums.splice(second, 1);
//     } else {
//       first++;
//       second++;
//     }
//   }
//   return nums.length;
// };
const arrNums = [0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
var removeDuplicates = function (nums) {
  let first = 0;
  let second = 1;

  while (second < nums.length) {
    if (nums[first] != nums[second]) {
      first++;
      nums[first] = nums[second];
    }
    second++;
  }
  return first + 1;
};
console.log(removeDuplicates(arrNums), arrNums);
