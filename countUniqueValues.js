function countUniqueValues(arr) {
  // function that counts all the unique values in the sorted arrays.
  // Any duplicate values will not increase the count for that value.

  // create another variable that holds the number of unique values.
  let count = 0;
  // create a variable that holds the value of the last element of the array
  let prevValue;
  // run a for loop that checks if the current value of the array is equal to the previous value.
  // if the new value is different then increase the counter by one.
  // take into account empty arrays
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== prevValue) {
      prevValue = arr[i];
      count++;
    }
  }
  // when the end of the array is reached return the counter value.

  return count;
}
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
