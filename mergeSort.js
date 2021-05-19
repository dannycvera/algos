function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  const arr1 = arr.slice(0, middle);
  const arr2 = arr.slice(middle);
  return merge(mergeSort(arr1), mergeSort(arr2));
}

function merge(arr1, arr2) {
  const result = [];
  let i = 0; // must use iterators for array positions. Do not use shift() or pop()
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    // keeps pushing until both counters have gone past the length of arrays.
    // console.log(arr1[i] < arr2[j], "i", i, arr1[i], "j", j, arr2[j]);
    if (j >= arr2.length || arr1[i] < arr2[j]) {
      //checks if arr1[i] is greater than arr2[j] or if arr2[j] doesn't exist.
      //Then pushes arr1[i] to results.
      result.push(arr1[i]);
      i++; // increases counter when a push happens
    } else {
      result.push(arr2[j]);
      j++; // increases counter when a push happens
    }
  }
  return result;
}

console.log(mergeSort([8, 2, 4, 6, 9, 3, 1, 76, 99]));
