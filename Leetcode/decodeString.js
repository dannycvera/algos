var decodeString = function (s) {
  const stringStack = [];
  const countStack = [];
  let decodedString = "";
  let currentString = "";
  let n = "";
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      n = n.concat(s[i]);
    } else if (s[i] === "[") {
      countStack.push(Number(n));
      n = "";
      stringStack.push(currentString);
      currentString = "";
    } else if (s[i] === "]") {
      decodedString = stringStack.pop();
      currentString = currentString.repeat(countStack.pop());
      decodedString = decodedString.concat(currentString);
      currentString = decodedString;
    } else {
      currentString = currentString.concat(s[i]);
    }
  }
  return currentString;
};

let str = "3[a]2[bc]";
console.log(decodeString(str));
