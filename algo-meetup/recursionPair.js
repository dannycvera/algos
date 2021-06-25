function sum(array) {
  if (array.length === 0) {
    return 0;
  }
  let element = array.pop();
  // console.log(element);
  return element + sum(array);
}
// let array = [2,4,3,6,8];
// uncomment these to check your work
// console.log(sum([1,1,1])); // -> returns 3
//console.log(sum([1, 2, 3, 4, 5, 6, 9])); // -> returns 21

// Challenge 3
function palindromeRegex(string) {
  const re = /[a-zA-Z]/g;
  const cleanStr = string.match(re).join("");
  const helper = (str, left = 0, right = str.length - 1) => {
    // base case
    if (left >= right) {
      return true;
    }
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      // if a mismatch is found return false and end the recursion
      return false;
    } else {
      // if both letters are equal then move to the next set of letters
      left += 1;
      right -= 1;
    }
    return helper(str, left, right);
  };

  return helper(cleanStr);
}

function palindrome(string) {
  const hash = { " ": true, ",": true, "-": true };
  const helper = (string, left = 0, right = string.length - 1) => {
    // base case
    if (left >= right) {
      return true;
    }

    if (hash[string[left]] || hash[string[right]]) {
      if (hash[string[left]]) {
        // if the left letter is a bad character then move it over
        left += 1;
      }
      if (hash[string[right]]) {
        // if the right letter is a bad character then move it over
        right -= 1;
      }
    } else {
      if (string[left].toLowerCase() !== string[right].toLowerCase()) {
        // if a mismatch is found return false and end the recursion
        return false;
      } else {
        // if both letters are equal then move to the next set of letters
        left += 1;
        right -= 1;
      }
    }

    return helper(string, left, right);
  };

  return helper(string);
}

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); //-> true
// console.log(palindrome("jmoney")); //-> false

function flattenRecursively(arr) {
  let flat = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      flat.push.apply(flat, flattenRecursively(arr[i]));
    } else {
      flat.push(arr[i]);
    }
  }
  return flat;
}
console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]
