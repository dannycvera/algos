function stringSearch(longStr, shortStr) {
  let count = 0;
  let i = 0;
  let j = 0;
  while (i <= longStr.length - shortStr.length) {
    console.log(longStr[i], i);
    while (j < shortStr.length && shortStr[j] === longStr[i + j]) {
      if (j === shortStr.length - 1) {
        count++;
        break;
      }
      console.log(shortStr[j], j);
      j++;
    }
    if (j > 0) {
      j = 0;
    }
    i++;
  }
  return count;
}

console.log(stringSearch("hello wooooorld, wor goodbye worwooorld", "ooorld"));
