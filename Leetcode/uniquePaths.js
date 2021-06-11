var uniquePaths = function (m, n) {
  // recursive version, but not very efficient.
  if (m === 1 || n === 1) {
    return 1;
  }
  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
};
let m = 3;
let n = 5;
let paths = uniquePaths(m, n);
console.log("paths", paths);
// test

var uniquePathsDyn = function (m, n) {
  const arr = new Array(m);
  for (let i = 0; i < arr.length; i++) {
    // create an array. Fill the top row and the first column with 1's
    arr[i] = new Array(n);
    if (i === 0) {
      arr[i].fill(1);
    } else {
      arr[i].fill(1, 0, 1);
    }
  }
  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1]; //add the number directly to the left and above to find the number of paths
    }
  }
  console.log(arr);
  return arr[m - 1][n - 1]; //return the value of the last element. This will have the most paths.;
};

let dynPaths = uniquePathsDyn(m, n);
console.log(dynPaths);
// test
