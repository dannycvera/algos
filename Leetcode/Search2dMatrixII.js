/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix === null || matrix.length === 0) {
    return false;
  }
  let smallDim = Math.min(matrix.length, matrix[0].length);
  let verticalSearch;
  let horizontalSearch;
  for (let i = 0; i < smallDim; i++) {
    verticalSearch = binarySearch(matrix, target, i, true);
    horizontalSearch = binarySearch(matrix, target, i, false);
    if (verticalSearch || horizontalSearch) {
      return true;
    }
  }
  return false;
};

function binarySearch(matrix, target, start, vertical) {
  let mid;
  let lo = start;
  let hi = vertical ? matrix[0].length - 1 : matrix.length - 1;
  let current;
  while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    current = vertical ? matrix[start][mid] : matrix[mid][start];

    if (current < target) {
      lo = mid + 1;
    } else if (current > target) {
      hi = mid - 1;
    } else {
      return true;
    }
  }
  return false;
}

let matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
let target = 5;
console.log(searchMatrix(matrix, target));
