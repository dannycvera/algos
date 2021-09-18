/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const visited = {}; //visited = {`${r},${c}`: '1'} the key are the coordinates and the value is which island it's part of.
  const islandCheck = {};
  const s = [[0, 0]];
  let curIsland = 0;
  let r, c;
  while (s.length > 0) {
    [r, c] = s.pop();
    islandCheck[`${r},${c}`] = true;
    if (grid[r][c] === "1" && !visited.hasOwnProperty(`${r},${c}`)) {
      curIsland++;
      dfsIsland(grid, r, c, visited);
    }
    // new island check
    if (r >= 1 && !islandCheck.hasOwnProperty(`${r - 1},${c}`)) {
      s.push([r - 1, c]);
    }
    if (c >= 1 && !islandCheck.hasOwnProperty(`${r},${c - 1}`)) {
      s.push([r, c - 1]);
    }
    if (r < grid.length - 1 && !islandCheck.hasOwnProperty(`${r + 1},${c}`)) {
      s.push([r + 1, c]);
    }
    if (
      c < grid[0].length - 1 &&
      !islandCheck.hasOwnProperty(`${r},${c + 1}`)
    ) {
      s.push([r, c + 1]);
    }
  }
  return curIsland;
};

var dfsIsland = function (grid, r, c, visited) {
  if (
    r < 0 ||
    c < 0 ||
    r >= grid.length ||
    c >= grid[0].length ||
    grid[r][c] == "0" ||
    visited.hasOwnProperty(`${r},${c}`)
  ) {
    return;
  }
  visited[`${r},${c}`] = true;
  dfsIsland(grid, r - 1, c, visited);
  dfsIsland(grid, r, c - 1, visited);
  dfsIsland(grid, r + 1, c, visited);
  dfsIsland(grid, r, c + 1, visited);
  return;
};

// Fastest solution
var numIslands = function (grid) {
  let islandCount = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "1") {
        islandCount++;
        dfsIsland(grid, r, c);
      }
    }
  }
  return islandCount;
};

var dfsIsland = function (grid, r, c) {
  if (
    r < 0 ||
    c < 0 ||
    r >= grid.length ||
    c >= grid[0].length ||
    grid[r][c] == "0"
  ) {
    return;
  }
  grid[r][c] = "0";
  dfsIsland(grid, r - 1, c);
  dfsIsland(grid, r, c - 1);
  dfsIsland(grid, r + 1, c);
  dfsIsland(grid, r, c + 1);
  return;
};
