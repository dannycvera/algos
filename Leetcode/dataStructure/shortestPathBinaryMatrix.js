var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] === 1 || grid[grid.length - 1][grid[0].length - 1] === 1) {
    return -1;
  }
  if (grid.length === 1 && grid[0].length === 1 && grid[0][0] === 0) {
    return 1;
  }
  const q = [[0, 0]];
  const visited = new Set();
  visited.add("0,0");
  let count = 1;
  const moves = [
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
  ];
  let r, c;
  let qLen;
  while (q.length > 0) {
    qLen = q.length;
    for (let child = 0; child < qLen; child++) {
      [r, c] = q.shift();
      for (let i = 0; i < moves.length; i++) {
        let [mR, mC] = [moves[i][0] + r, moves[i][1] + c];
        if (grid[mR] && grid[mR][mC] === 0 && !visited.has(`${mR},${mC}`)) {
          if (mR === grid.length - 1 && mC === grid[0].length - 1) {
            count++;
            return count;
          }
          visited.add(`${mR},${mC}`);
          q.push([mR, mC]);
        }
      }
    }
    count++;
  }
  return -1;
};
