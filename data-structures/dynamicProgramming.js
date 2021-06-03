// Dynamic Programming is a method for solving a complex problem by breaking it down
// into a collection of simpler subproblems,
// solving each of those subproblems just once,
// and storing their solutions.
//
// It only works on problems with an...
// Optimal Substructure &
// Overlapping Subproblems

// Overlapping subproblems:
// a problem is said to have overlapping subproblems
// if it can be broken down into subproblems
// which are reused several times.

// Optimal Substructure:
// a problem is said to have optimal substruture if an
// optimal solution can be constructed from optimal solutions
// of its subproblems

// Memoization:
// Storing the results of expensive function calls
// and returning the cached results when the same inputs occur again

// recursive memoization personal creation
// function fib(n, sequence = [0, 1]) {
//   if (sequence[n] !== undefined) return sequence[n];
//   let i = sequence.length;
//   sequence.push(sequence[i - 2] + sequence[i - 1]);
//   return fib(n, sequence);
// }

// recursive memoization
function fib(n, sequence = [0, 1]) {
  if (sequence[n] !== undefined) {
    // console.log(n, sequence);
    return sequence[n];
  }
  sequence[n] = fib(n - 2, sequence) + fib(n - 1, sequence);
  // console.log(n, sequence);
  return sequence[n];
}

// Tabulation:
// Storing the results of a previous result
// in a "table" (usually an array)
// Usually done using iteration
// Better Space complexity can be achieved using tabulation

// bottom up approach using Tabulation
function fibTab(n) {
  if (n < 0) {
    return undefined;
  }
  sequence = [0, 1];
  let i = 2;
  while (!sequence[n]) {
    sequence[i] = sequence[i - 2] + sequence[i - 1];
    i++;
  }
  return sequence[n];
}
console.log(fibTab(100000));
