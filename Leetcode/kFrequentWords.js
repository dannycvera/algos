/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  if (!words.length) {
    return [];
  }
  const results = [];
  const hash = {};

  // build hash of the word frequencies.
  for (let i = 0; i < words.length; i++) {
    if (hash[words[i]]) {
      hash[words[i]] += 1;
    } else {
      hash[words[i]] = 1;
    }
  }

  // create an array of arrays of the hash words and their frequencies.
  const que = Object.entries(hash);

  // sort hash by frequency of words, then by alphabetical if they are equal
  que.sort((a, b) => {
    if (a[1] < b[1]) {
      return 1;
    }
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  });

  // push the words from the sorted que to the results array
  for (let i = 0; i < k; i++) {
    results.push(que[i][0]);
  }

  return results;
};
