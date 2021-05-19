function minSubArrayLen(arr, n) {
  let tempSum = arr[0];
  let len = 0;
  for (let i = 0; i < arr.length; i++) {
    tempSum = tempSum + arr[i];
    if (tempSum >= n) {
      len = i + 1;
      break;
    }
  }
  for (let i = 0; i <= arr.length - len; i++) {
    tempSum = tempSum - arr[i];
    if (tempSum >= n) {
      len--;
    } else {
      tempSum = tempSum + arr[i + len];
    }
  }
  return len;
}
