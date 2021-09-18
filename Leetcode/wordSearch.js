var exist = function (board, word) {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (dfs(board, word, r, c, 0)) {
        return true;
      }
    }
  }
  return false;
};

var dfs = function (board, word, r, c, i) {
  if (
    r < 0 ||
    c < 0 ||
    r >= board.length ||
    c >= board[0].length ||
    board[r][c] === "#" ||
    board[r][c] !== word[i]
  ) {
    return false;
  }
  if (word.length === i + 1) {
    return true;
  }

  board[r][c] = "#";

  if (
    dfs(board, word, r - 1, c, i + 1) ||
    dfs(board, word, r, c - 1, i + 1) ||
    dfs(board, word, r + 1, c, i + 1) ||
    dfs(board, word, r, c + 1, i + 1)
  ) {
    return true;
  }

  board[r][c] = word[i];
  return false;
};

// var dfs = function (board, word, r, c, i, visited = {}) {
//   if (
//     r < 0 ||
//     c < 0 ||
//     r >= board.length ||
//     c >= board[0].length ||
//     visited.hasOwnProperty(`${r},${c}`)
//   ) {
//     return false;
//   }
//   if (board[r][c] !== word[i]) {
//     return false;
//   } else if (word.length === i + 1) {
//     return true;
//   }
//   visited[`${r},${c}`] = true;

//   // If all recursive calls return false delete the last entry in the visited Set and return false.
//   if (dfs(board, word, r - 1, c, i + 1, visited)) {
//     return true;
//   } else if (dfs(board, word, r, c - 1, i + 1, visited)) {
//     return true;
//   } else if (dfs(board, word, r + 1, c, i + 1, visited)) {
//     return true;
//   } else if (dfs(board, word, r, c + 1, i + 1, visited)) {
//     return true;
//   }
//   delete visited[`${r},${c}`];
//   return false;
// };
let board = [
  ["C", "A", "A"],
  ["A", "A", "A"],
  ["B", "C", "D"],
];
let word = "AAB";

console.log(exist(board, word));
