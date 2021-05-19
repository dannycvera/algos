// NOT A VALID SOLUTION
// ONLY WORKS SOME OF THE TIME
// do not use examples

function quickSort(arr, left = 0, right = arr.length - 1) {
  let index = split(arr, left, right);
  if (left < index - 1) {
    quickSort(arr, left, index - 1);
  }
  if (index < right) {
    quickSort(arr, index, right);
  }

  return arr;
}

function swap(arr, pos1, pos2) {
  // if (arr[pos1] > arr[pos2]) {
  let temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
  // }
}

function split(arr, left, right) {
  // if (left === right) {
  //   return left;
  // }
  let pivot = arr[Math.floor((left + right) / 2)];
  // let pivot = arr[left];
  // console.log(right - left);
  while (left <= right) {
    if (arr[left] < pivot) {
      left++;
    }
    if (arr[right] > pivot) {
      right--;
    }

    if (arr[left] >= pivot && arr[right] <= pivot) {
      swap(arr, left, right);
      right--;
      left++;
    }
  }
  // swap(arr, pivot, left - 1);
  console.log(left, right, arr.length - 1);
  return left;
}
console.log(quickSort([2, 8, 9, 6, 4, 3, 20, 5]));
