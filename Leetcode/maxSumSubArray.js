class Solution {
  maximumSumSubarray(K, Arr, N) {
    //code here
    let maxSum = 0;

    for (let i = 0; i < K; i++) {
      maxSum += Arr[i];
    }

    let sum = maxSum;

    for (let e = K; e < N; e++) {
      let s = e - K;
      sum = sum - Arr[s] + Arr[e];
      maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
  }
}
// [100, 200, 300, 400, 500, 600 , 700 , 800]
//        i              k
//
//
