let arr = [
  13, 99, 16, 20, 12, 44, 8, -13, 1, 11, 98, 4, 5, 9, 15, 2, 17, 18, -6,
];

function quickSort(arr, left = 0, right = arr.length - 1) {
  // fast inplace sorting of numbers in an array
  // sorting happens when the sections recursivly end up as single elements
  // single elements are sorted
  // as long as they've been shuffled to the left if their value is lower
  // and right of the pivot if they are of a higher value
  // then array will eventually be fully sorted
  if (left >= right) {
    return arr;
  }
  // pivot is is considered sorted since it is a single value and left as is
  // everything to the right is higher than the pivot
  // everything to the left of the pivot is lower
  let middle = pivot(arr, left, right);
  quickSort(arr, left, middle - 1); // left side of pivot array section to be sorted
  quickSort(arr, middle + 1, right); // right side of pivot array section to be sorted

  return arr;
}

// working pivot solution
// function pivot(arr, start = 0, end = arr.length - 1) {
//   let pivot = start;
//   // let startIndx = start;
//   if (start === end) {
//     return pivot;
//   }
//   for (let i = start + 1; i <= end; i++) {
//     if (arr[start] > arr[i]) {
//       pivot++;
//       swap(arr, i, pivot);
//     }
//   }
//   swap(arr, pivot, start);
//   return pivot;
// }

function swap(arr, a, b) {
  // helper function swaps values betwen locations of an array
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// working while loop solution with two pointers on each side
function pivot(arr, start = 0, end = arr.length - 1) {
  // finds the pivot of a section of an array
  // uses the pivot to move values that are lower than the pivot to one side
  // and moves higher values than the pivot to the other side.
  // returns the array index value of the pivot.
  if (start === end) {
    return start;
  }
  let pivot = end - 1;
  while (start <= pivot) {
    if (arr[end] < arr[start] && arr[end] > arr[pivot]) {
      swap(arr, pivot, start);
      start++;
      pivot--;
    } else {
      if (arr[end] < arr[pivot]) {
        pivot--;
      }
      if (arr[end] > arr[start]) {
        start++;
      }
    }
  }
  pivot++;
  swap(arr, pivot, end);
  return pivot;
}

console.log(quickSort(arr), arr);
