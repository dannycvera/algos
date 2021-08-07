// detect two anagrams
// import { argv } from "process";
// let word1 = argv[2];
// let word2 = argv[3];

function anagram(word1, word2) {
  const hash1 = {}; //{ "a": 2, "t":1}
  const hash2 = {};
  let current;
  for (let i = 0; i < word1.length; i++) {
    current = word1[i].toLowerCase();
    if (hash1.hasOwnProperty(current)) {
      hash1[i]++;
    } else {
      hash1[current] = 1;
    }
    current = word2[i].toLowerCase();
    if (hash2.hasOwnProperty(current)) {
      hash2[i]++;
    } else {
      hash2[current] = 1;
    }
  }
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
// let word_1 = "Tar";
// let word_2 = "Rat";
console.log(anagram(word_1, word_2));
