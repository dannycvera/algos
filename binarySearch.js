function binarySearch(arr, val) {
  // add whatever parameters you deem necessary - good luck!
  let end = arr.length - 1; // must be one larger than the end of array since we are using Math.floor.
  let start = 0; //Middle or start will end at one less than end due to Math.floor
  let middle;
  while (start <= end && arr[middle] !== val) {
    // checks if it has reached the end without finding the value
    middle = Math.floor((start + end) / 2); // finds the middle point between start and end index
    console.log("middle", middle, "start", start, "end", end, arr[middle]);
    if (arr[middle] < val) {
      // shrinks the search area by the end half
      start = middle + 1;
    } else if (arr[middle] > val) {
      // shrinks the search area to the first half
      end = middle - 1;
    }
  }
  if (arr[middle] === val) {
    // found the value
    return middle;
  } else {
    // not found
    return -1;
  }
}
console.log(binarySearch([1, 2, 4, 6, 8, 10, 31, 48, 201], 1));
