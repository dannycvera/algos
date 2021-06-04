function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!
  //define variables
  let strObj = {};
  let char;
  let len = 0;
  let dups = 0;
  let i = 0;
  // loop thru string and create an object with number of character frequencies until a duplicate is found.
  // record the length of the initial longest substring
  while (i < str.length) {
    char = str[i];
    if (strObj[char]) {
      break;
    } else {
      strObj[char] = 1;
      len++;
    }
    i++;
  }
  // inchworm over the string first adding letters then removing them.
  // only adding to the len variable when a letter is added to the end and if no duplicates are found
  i = 0;
  while (i < str.length - len) {
    // add to the end while keeping track if duplicates are found
    char = str[i + len];
    if (strObj[char]) {
      strObj[char] += 1;
      dups++;
    } else {
      strObj[char] = 1;
      // only if no duplicates are found do you increase the len counter
      if (dups === 0) {
        len++;
      }
    }

    // remove the beginging if there are duplicates
    char = str[i];
    if (dups > 0) {
      if (strObj[char] > 1) {
        strObj[char] -= 1;
        dups--;
      } else {
        delete strObj[char];
      }
      // only increase the i counter if there are duplicates and the begining is removed
      i++;
    }
  }
  return len;
}

function findLongestSubstring2(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    cccc;
    // index - beginning of substring = length of current string
    longest = Math.max(longest, i - start);
    seen[char] = i;
  }
  return longest;
}

console.log(findLongestSubstring2("bbbbb"));
