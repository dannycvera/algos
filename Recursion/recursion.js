//factorial
const iterative = (num) => {
  if (num <= 0) return 1;
  let total = 1;
  for (let i = num; i > 1; i--) {
    total = total * i;
    console.log(total);
  }
  return total;
};

const recursive = (num) => {
  if (num < 2) return 1;
  console.log(num);
  return num * recursive(num - 1);
};

//Fibinacci sequence
function fibRec(n) {
  if (n <= 2) return 1;
  console.log({ n });
  return fib(n - 1) + fib(n - 2);
}

function fibArr(n) {
  if (n <= 0) return 0;
  if (n <= 3) return 1;
  let arr = [0, 1, 1];
  for (i = 3; i < n; i++) {
    let tempNum = arr[i - 1] + arr[i - 2];
    console.log(tempNum);
    arr.push(tempNum);
  }
  return arr[arr.length - 1];
}

function fib(n) {
  if (n <= 0) return 0;
  let prevFirst = 0;
  let prevSec = 1;
  let tempNum = 1;
  for (i = 3; i < n; i++) {
    tempNum = prevFirst + prevSec;
    console.log(tempNum);
    prevFirst = prevSec;
    prevSec = tempNum;
  }

  return prevSec;
}

console.log(fibArr(10));
