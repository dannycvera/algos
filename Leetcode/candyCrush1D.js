let str = "aabbccddeeedcba";

function crush(s) {
  // stack of groupings [[a,2],[b,3],etc.]
  // pop off when crushed
  const stack = [];
  let i = 0;
  let current;
  let tempBegin;
  let tempEnd;
  while (i < s.length) {
    current = s[i];
    if (stack.length === 0 || stack[stack.length - 1][0] !== current) {
      stack.push([current, 1]);
      i++;
    } else if (stack[stack.length - 1][0] === current) {
      stack[stack.length - 1][1] += 1;
      i++;
    }
    if (stack[stack.length - 1][1] > 2) {
      tempEnd = s.substring(i);
      i = i - stack[stack.length - 1][1];
      tempBegin = s.substring(0, i);
      s = tempBegin.concat(tempEnd);
      stack.pop();
    }
  }
  return s;
}
console.log(crushRecursive(str));

// not very efficient
function crushRecursive(s, i = 0, j = 1) {
  if (j > s.length) {
    return s;
  }
  // let newStr = s;
  while (j <= s.length) {
    if ((s[i] !== s[j] || j >= s.length) && j >= i + 3) {
      let tempBegin = s.substring(0, i);
      let tempEnd = s.substring(j);
      s = tempBegin.concat(tempEnd);
      j = i + 1;
      return crushRecursive(s, 0, 1);
    } else if (s[i] === s[j]) {
      j++;
    } else {
      i = j;
    }
  }
  return s;
}
