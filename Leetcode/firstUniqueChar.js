/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let hash = {};
  // build hash map of the frequency of words
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      hash[s[i]] += 1;
    } else {
      hash[s[i]] = 1;
    }
  }

  // checks the hash map for the first letter with a frequency less than 2
  // returns the index. Objects keep their order in es2015
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};
let s = "leetcode";
console.log(firstUniqChar(s));
