function averagePair(arr, n) {
  // add whatever parameters you deem necessary - good luck!
  // create a function that checks if a pair of numbers exists inside a sorted array that produces an average equal to the second argument.
  // define two pointers. one starting at the end and another at the begining
  // loop thru the array until the two pointers are equal or switch sides of the array
  // check the ends of the array for the average. if it is greater than n, drop the right side down.
  // since the second value on the right is most likely to be a lower value.
  // If the average is less than n, increase the pointer on the left. which is most likely to increase in value
  // if found return true. if not return false

  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if ((arr[i] + arr[j]) / 2 === n) {
      return true;
    } else if ((arr[i] + arr[j]) / 2 >= n) {
      j--;
    } else if ((arr[i] + arr[j]) / 2 <= n) {
      i++;
    }
  }
  return false;
}
averagePair([1, 2, 3], 2.5);
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
