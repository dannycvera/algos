var isPowerOfThree = function (n) {
  if (n === 1) {
    return true;
  } else if (n % 1 !== 0) {
    return false;
  } else {
    n = n / 3;
    return isPowerOfThree(n);
  }
};
