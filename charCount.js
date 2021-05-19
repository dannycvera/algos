//Understand the problem
//// restate the problem in your own words, or paraphrase the problem
//// what are the inputs, integers, floats, strings, arrays, objects
//// what are the outputs, usually related to inputs
//// can you solve the problem with the inputs provided
//Explore CONCRETE EXAMPLES
//// look into edge cases
//Break it down
////write out steps you need to take
////
//Solve/Simplify
//Look back and refactor

function charCount() {
  //return an object with keys that are lowercase alphanumeric characters in the string;
}

function charCount(str) {
  //return an object with keys that are lowercase alphanumeric characters in the string;
  //
  // make object to return at the end
  var result = {};
  // loop over string, for each character...
  let char;
  for (let i = 0; i < str.length; i++) {
    if (isAlphaNumeric(str[i])) {
      char = str[i].toLowerCase();
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }

  // if the char is a number/letter AND is a key in object, add one to count
  // if the char is a number/letter AND is Not in  object, add it and set count to 1
  // if character is something else (space, period, etc.) dont do anything

  // return object at the end
  console.log(result);
  return result;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    (code > 47 && code < 58) || // numbers
    (code > 64 && code < 91) || // uppercase letters)
    (code > 96 && code < 123) // lowercase letters
  ) {
    return true;
  } else {
    return false;
  }
}
charCount("Hel9lo ?., #$");
