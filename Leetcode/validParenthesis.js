// var isValid = function (s) {
//     let stack = [];
//     for(let i=0;i<s.length;i++){
//         if(s[i] === "(" || s[i] === "{" || s[i] === "["){
//            stack.push(s[i]);
//         } else {
//           if(stack.length === 0){
//              return false;
//           }
//           if(s[i] === ")" && stack[stack.length - 1] !== "("){
//              return false;
//           }
//           if(s[i] === "}" && stack[stack.length - 1] !== "{"){
//              return false;
//           }
//           if(s[i] === "]" && stack[stack.length - 1] !== "["){
//               return false;
//           }
//           stack.pop();
//         }
//     }
//     if(stack.length !== 0){
//        return false;
//     }
//     return true;
// };
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
//

///
///

const isValid = (s, r = { ")": "(", "]": "[", "}": "{" }, S = []) => {
  for (c of s) {
    if (c in r) {
      if (S.pop() != r[c]) return !1;
    } else S.push(c);
  }
  return !S.pop();
};
