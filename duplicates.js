function areThereDuplicates(...arr) {
  // good luck. (supply any arguments you deem necessary.)
  // check if the arguments passed are duplicates of each other
  // "z", "r", "z" would return true
  // 4 , 5, 5 would return true as well
  // 9, 21, 3 would return false
  // first accept an unlimited amount of variables
  // create an object that will hold the elements from the parameters
  // and the number of occurances they appear.
  // create a loop that checks if it finds that occurance more than once.
  // if so, then return true
  // otherwise return false

  let dupObj = {};
  let arg;
  for (let i = 0; i < arr.length; i++) {
    arg = arr[i];
    if (dupObj[arg]) {
      return true;
    } else {
      dupObj[arg] = 1;
    }
  }
  return false;
}
