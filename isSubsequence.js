function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  // checks if you can find the first string inside of the second string in the correct order, but other characters may appear inbetween.
  // create two variables, both starting at zero;
  // the loop thru the second string checking if each character matches, if they dont only one of the variables increases,
  // if they do match both variables increase.
  // if found return true
  //   let str1L = str1.length;
  let i = 0;
  for (let j = 0; j < str2.length; j++) {
    console.log("j", j, "i", i);
    console.log("i", str1[i], "j", str2[j]);
    if (str1[i] === str2[j]) {
      i++;

      if (i === str1.length) {
        console.log(true);
        return true;
      }
    }
  }
  console.log(false);
  return false;
}
isSubsequence("hello", "hello world");
isSubsequence("sing", "sting");
