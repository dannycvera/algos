// detect two anagrams

function anagram(word1, word2) {
  // use two hash maps to store the frequecies of the letters in each word
  const hash1 = {}; //{ "a": 2, "t":1}
  const hash2 = {};
  let current;
  for (let i = 0; i < word1.length; i++) {
    // populate the first hash map with letter frequencies from the first word
    current = word1[i].toLowerCase();
    hash1[current] = hash1.hasOwnProperty(current)
      ? hash1[i]++
      : (hash1[current] = 1);
    // populate the second hash map with letter frequencies from the second word
    current = word2[i].toLowerCase();
    hash2[current] = hash2.hasOwnProperty(current)
      ? hash2[i]++
      : (hash2[current] = 1);
  }
  // compare frequencies of each word by comparing the number values in each hash map
  for (let i = 0; i < word2.length; i++) {
    current = word2[i].toLowerCase();
    if (!hash1.hasOwnProperty(current) && hash1[current] !== hash2[current]) {
      return false;
    }
  }
  return true;
}

let word_1 = process.argv[2];
let word_2 = process.argv[3];

// for testing
// let word_1 = "Tar";
// let word_2 = "Rat";
console.log(anagram(word_1, word_2));
