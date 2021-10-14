// not correct way of solving this problem
//

var gridGame = function (grid) {
  let rEnd = grid.length - 1;
  let cEnd = grid[0].length - 1;
  const dfs = (r, c, sum) => {
    let result;
    if (r === rEnd && c === cEnd) {
      result = sum + grid[r][c];
      // grid[r][c] = 0;
      return result;
    } else if (r > rEnd || c > rEnd) {
      return -1;
    }
    let current = grid[r][c];
    // grid[r][c] = 0;
    sum += current;
    let down = -1;
    let right = -1;
    if (grid[r + 1] && grid[r + 1][c]) {
      // let downNext = grid[r + 1][c];
      down = dfs(r + 1, c, sum);
    }
    // let next = -1;
    if (grid[r] && grid[r][c + 1]) {
      // let next =  grid[r][c + 1];
      right = dfs(r, c + 1, sum);
    }
    let maxSum = -1;
    if (down > -1 && down > right) {
      // if(grid[r] && grid[r][c + 1]) grid[r][c + 1] = next;
      maxSum = down;
      // grid[r + 1][c] = 0;
    } else {
      // if(grid[r + 1] && grid[r + 1][c]) grid[r + 1][c] = downNext;
      maxSum = right;
      // grid[r][c + 1] = 0;
    }

    return maxSum;
    // return Math.max(dfs(r + 1, c, sum), dfs(r, c + 1, sum)) + current;
  };
  // dfs(0,0,0);
  let results = dfs(0, 0, 0);
  console.log(grid);
  return results;
};

let grid = [
  [2, 5, 4],
  [1, 5, 1],
];
console.log(gridGame(grid));

/*
[[20  3 20 17  2 12 15 17  4 15],
 [20 10 13 14 15  5  2  3 14  3]]

[[0  0  0  0  0  12 15 17 4 15] 
[20 10 13 14  0   0  0  0 0  0]]
89 for A
max points would be 128
*/
