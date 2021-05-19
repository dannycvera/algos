function radixSort(nums) {
  // sorts an array of numbers using buckets and digit values
  // max stores the largest digit for our first loop
  let max = maxDigit(nums);
  // loops thru each digit
  for (let i = 0; i < max; i++) {
    // creates a new empty set of buckets during each loop
    // let buckets = [[], [], [], [], [], [], [], [], [], []];
    let buckets = Array.from({ length: 10 }, () => []);
    // loops thru each element of the input array copy
    for (let j = 0; j < nums.length; j++) {
      // gets the value of the current digit i
      let digit = getDigit(nums[j], i);
      // console.log(buckets, nums[j], 10 ** i);
      // pushes the element to the bucket index equal to the digit value
      buckets[digit].push(nums[j]);
    }
    // flattens all the buckets and sets the array equal to it.
    // nums = buckets.flat();

    nums = [].concat(...buckets);

    // console.log(nums);
  }
  // once out of the last loop the resultsArr should be sorted.
  return nums;
}
console.log(radixSort([36, 2, 777, 4, 9462, 80352]));
function getDigit(num, place) {
  // returns the value of the specific place of a number starting from 0.
  // The 0th place will give you the ones
  // working code. just not as pretty
  // return Math.floor((num % 10 ** (place + 1)) / 10 ** place);
  return Math.floor(Math.abs(num) / 10 ** place) % 10;
}
// console.log(getDigit(12345, 2));

function digitCount(num) {
  // counts the number of digits in a number starting from 1
  if (num === 0) {
    return 1;
  }
  // working code. just not as pretty
  // let i = 0;
  // let temp = num;

  // while (temp > 0) {
  //   temp = Math.floor(num / 10 ** i);
  //   i++;
  // }
  // return i - 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// console.log(digitCount(12345));
function maxDigit(nums) {
  // finds the maximum number of digits of the largest number in an array of numbers
  let max = 0;
  // working code. just not as pretty
  // let temp = 0;
  // for (const n of nums) {
  //   temp = digitCount(n);
  //   if (temp > max) {
  //     max = temp;
  //   }
  // }
  for (const n of nums) {
    max = Math.max(max, digitCount(n));
  }
  return max;
}
// console.log(maxDigit([23, 1, 3456, 44, 666]));
