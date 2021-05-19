function maxSubarraySum(arr, n) {
  // add whatever parameters you deem necessary - good luck!
  if (n >= arr.length) {
    return null;
  }
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + arr[i];
  }
  let tempSum = sum;
  for (let i = 0; i < arr.length - n; i++) {
    tempSum = tempSum - arr[i] + arr[i + n];
    if (tempSum > sum) {
      sum = tempSum;
    }
  }
  return sum;
}
// maxSubarraySum([100, 200, 300, 400], 2);
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2);
