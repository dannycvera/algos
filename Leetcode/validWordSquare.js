/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function (words) {
  if (words[0].length !== words.length) {
    return false;
  }
  let i = 0;
  let j = 0;
  while (i < words.length) {
    if (words[i].length > words[0].length || words[i][j] !== words[j][i])
      return false;
    j++;
    if (j === words.length) {
      j = 0;
      i++;
    }
  }
  return true;
};

// ["ball","area","read","lady"]
//   i      i
//   j      j

// ["abc","b"]
//   abc
//   b
//
//
