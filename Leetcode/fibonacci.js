var fib = function (n, mem = [0, 1]) {
  if (n < 2) {
    return n;
  }

  if (mem[n]) {
    return mem[n];
  } else {
    let current = fib(n - 1, mem) + fib(n - 2, mem);
    mem.push(current);
    // mem[n] = current;
    return mem[n];
  }
};

// base cases
// setup default parameter
// pass an object (memoization)
// if(mem[n]){ return mem[n]} else {
// let current = fib(n -1) + fib(n -2)
//mem[n] = current;

// if n is 0 return 0
// if n is 1 return 1
// fib(n -1) + fib(n -2)
