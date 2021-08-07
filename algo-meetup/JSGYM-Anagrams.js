// detect two anagrams

// the optimal solution from leetcode
function anagram(word1, word2) {
  // uses a table with 26 elements
  // then records a counter in each element that corresponds to a letter
  // loop thru and adjust the counters
  // the leters in the first word will increment
  // the second word will decrement
  // loop thru the 26 element array and if any of the elemtnts are not zero,
  // then return false

  if (word1.length !== word2.length) {
    return false;
  }

  const freq = new Array(26);
  freq.fill(0);
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();
  for (let i = 0; i < word1.length; i++) {
    freq[word1.charCodeAt(i) - 96]++;
    freq[word2.charCodeAt(i) - 96]--;
  }
  for (let i = 0; i < 26; i++) {
    if (freq[i] !== 0) {
      return false;
    }
  }
  return true;
}

//my original solution which is still O(n), but uses a little more space and is slightly slower
function anagram(word1, word2) {
  // use two hash maps to store the frequecies of the letters in each word
  if (word1.length !== word2.length) {
    return false;
  }
  const hash1 = {}; //{ "a": 2, "t":1}
  const hash2 = {};
  let current;

  for (let i = 0; i < word1.length; i++) {
    // populate the first hash map with letter frequencies from the first word
    current = word1[i].toLowerCase();
    if (hash1.hasOwnProperty(current)) {
      hash1[current]++;
    } else {
      hash1[current] = 1;
    }
    // populate the second hash map with letter frequencies from the second word
    current = word2[i].toLowerCase();
    if (hash2.hasOwnProperty(current)) {
      hash2[current]++;
    } else {
      hash2[current] = 1;
    }
  }
  // compare frequencies of each word by comparing the number values in each hash map
  const hash2Keys = Object.keys(hash2);
  for (let i = 0; i < hash2Keys.length; i++) {
    current = hash2Keys[i];
    if (!hash1.hasOwnProperty(current) || hash1[current] !== hash2[current]) {
      return false;
    }
  }
  return true;
}

let word_1 = process.argv[2];
let word_2 = process.argv[3];
// let word_1 = "Tar";
// let word_2 = "Rat";
console.log(anagram(word_1, word_2));
