// finds the minimum value after i. If the minimum value to the right is less than the value at i, swap.
// then find the next minimum and campare it to the next element of i.

function selectionSort(arr) {
  let min; // stores minimum value in the array to be brought to the front.
  let temp;
  for (let i = 0; i < arr.length; i++) {
    min = i; // assumes the first element is the minimum
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        // checks the rest of the array for a lower value to store in the min variable
        min = j;
      }
    }
    if (min !== i) {
      // if the first element was not the lowest value. Swaps
      temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  console.log(arr);
  return arr;
}

selectionSort([4, 2, 3, 7, 1, 9]);
