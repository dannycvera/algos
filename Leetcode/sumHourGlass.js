function hourglassSum(arr) {
  // Write your code here
  let maxSum = -Infinity;
  const helper = (r, c) => {
    let maxR = r + 3;
    let maxC = c + 3;
    let sum = arr[r + 1][c + 1];
    while (r < maxR) {
      while (c < maxC) {
        sum = sum + arr[r][c];
        c++;
      }
      r += 2;
      c -= 3;
    }
    maxSum = Math.max(maxSum, sum);
  };
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[0].length - 2; j++) {
      helper(i, j);
    }
  }
  return maxSum;
}

function hourglassSum2(arr) {
  // Write your code here
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[0].length - 2; j++) {
      let r = i;
      let c = j;
      const maxR = r + 3;
      const maxC = c + 3;
      let sum = arr[r + 1][c + 1];
      while (r < maxR) {
        while (c < maxC) {
          sum = sum + arr[r][c];
          c++;
        }
        r += 2;
        c -= 3;
      }
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}

function hourglassSum3(arr) {
  let maxSum = -Infinity;
  let sum;
  for (let i = 0; i < arr.length - 2; i++) {
    sum =
      arr[i][0] +
      arr[i][1] +
      arr[i][2] +
      arr[i + 1][1] +
      arr[i + 2][0] +
      arr[i + 2][1] +
      arr[i + 2][2];
    maxSum = Math.max(maxSum, sum);
    for (let j = 1; j < arr[0].length - 2; j++) {
      sum -= arr[i][j - 1] + arr[i + 1][j] + arr[i + 2][j - 1];
      sum += arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j + 2];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}
const test = [
  [0, -4, -6, 0, -7, -6],
  [-1, -2, -6, -8, -3, -1],
  [-8, -4, -2, -8, -8, -6],
  [-3, -1, -2, -5, -7, -4],
  [-3, -5, -3, -6, -6, -6],
  [-3, -6, 0, -8, -6, -7],
];
const test2 = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5],
];
console.log(hourglassSum2(test));
