function anagram(str1, str2) {
  // Compare two strings and see if the second one is an anagram of the first.
  // Order of the letters do not matter. Only the correct frequency of each letter.
  //
  //
  // create two objects that contain the frequency of each value for each array.
  // do this using Non-Nested loops.
  if (str1.length !== str2.length) {
    return false;
  }

  const strObj1 = {};
  const strObj2 = {};
  let char1;
  let char2;
  for (let i = 0; i < str1.length; i++) {
    char1 = str1[i];
    char2 = str2[i];
    // if (strObj1[char] > 0) {
    strObj1[char1] ? (strObj1[char1] += 1) : (strObj1[char1] = 1);
    strObj2[char2] ? (strObj2[char2] += 1) : (strObj2[char2] = 1);
    // } else {
    //   strObj1[char] = 1;
    // }
  }

  // for (let i = 0; i < str2.length; i++) {
  //   char = str2[i];
  // if (strObj2[char] > 0) {

  // } else {
  //   strObj2[char] = 1;
  // }
  // }
  // then run another non-nested loop checking
  // if the keys from the array2 are the same values of the keys from array1
  // then run another if statement within the same loop
  // checking if the frequencies are correct.
  for (let key in strObj1) {
    if (strObj2[key] !== strObj1[key]) {
      return false;
    }
  }
  return true;
  console.log(strObj1, strObj2);
}
console.log(anagram("gzz", "zzg"));
