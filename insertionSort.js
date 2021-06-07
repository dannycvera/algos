// insertion sort good at nearly sorted data
// or with data that has to be sorted as values are enterd in
// sorts by finding the correct position to insert the element of i in the sorted group left of i

function insertionSort(arr) {
  let holder;
  let j; // index and itirator for the while loop
  for (let i = 1; i < arr.length; i++) {
    // loops thru the entire array, but starts at the second value
    holder = arr[i]; // stores the value to be sorted
    // console.log('holder',holder);
    j = i - 1;
    while (j >= 0 && arr[j] > holder) {
      //loop backwards from the stored value.
      //loop ends when we find the position that is less than or equal to the stored value
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = holder; // once the insertion point is found, while loop ends and we insert the stored value
    // remember the last command in the while loop is a j--, so we must add 1 back to j.
  }

  // console.log(arr);
  return arr;
}
// insertionSort([3,8,2,5,1,10])
