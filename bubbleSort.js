// Bubbles largest values to the top
// keeps swaping values, lower values to the left and higher to the right.
// uses a variable to keep track if a swap occured.
// once a pass occurs that doesnt require a swap, then the array is sorted.

let arr = [6, 4, 8, 2, 9, 1, 3];

function bubbleSort(arr) {
  let temp;
  let noSwaps; // stores a boolean whether a swap occured
  for (let i = arr.length - 1; i >= 0; i--) {
    // starts at the end, bringing larger values to the top.
    noSwaps = true; // resets noSwaps to true
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        //if the values directly next to each other are out of order. swap
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false; // sets noSwaps to false to keep looping
      }
    }
    if (noSwaps) {
      // if a no swaps occured after looping thru the rest of the array. your done!!
      break;
    }
  }
  console.log(arr);
  return arr;
}

bubbleSort([1, 3, 2, 4, 8, 9]);
