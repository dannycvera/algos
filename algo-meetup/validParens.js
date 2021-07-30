var isValid = function (s) {
  let hash = { ")": "(", "}": "{", "]": "[" };
  let stack = [];
  let valid = null;
  let bracket;
  for (let i = 0; i < s.length; i++) {
    if (s[i] in hash) {
      bracket = stack.pop();
      if (bracket === hash[s[i]]) {
        valid = true;
      } else {
        valid = false;
        return valid;
      }
    } else {
      stack.push(s[i]);
    }
  }
  if (!stack.length) {
    valid = true;
  } else {
    valid = false;
  }
  return valid;
};
