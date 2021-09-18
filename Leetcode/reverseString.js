// var reverseString = function(s) {
//     let left = 0;
//     let right = s.length - 1;
//     let temp;
//     while(left < right){
//         temp = s[left];
//         s[left] = s[right];
//         s[right] = temp;
//         left++;
//         right--;
//     }
//     return s;
// }

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  const helper = (s, left, right) => {
    if (left >= right) {
      return s;
    }
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    return helper(s, left + 1, right - 1);
  };
  return helper(s, left, right);
};

// var reverseString = function(s, left = 0, right = s.length - 1) {
//     if(left >= right){
//         return s;
//     }
//     let temp = s[left];
//     s[left] = s[right];
//     s[right] = temp;
//     return reverseString(s, left + 1, right - 1);

// };

// input an array
// output a array in reverse
// add a left and right variable
// with left default to 0, right default to length - 1
// decrement each by 1 (left + 1, right - 1 on each recursive call)
