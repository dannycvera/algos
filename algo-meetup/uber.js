// Uber Interview questions
// % 3

function miniimumStepsToOne(n, mem = {}) {
  // base case
  if (n === 1) {
    return 0;
  }
  if (mem[n]) {
    console.log(mem[n]);
    return mem[n];
  }
  // recursive relations
  // sub 1
  let steps = miniimumStepsToOne(n - 1, mem);

  //divby2
  if (n % 2 === 0) {
    steps = Math.min(steps, miniimumStepsToOne(n / 2, mem));
  }

  //divby3
  if (n % 3 === 0) {
    steps = Math.min(steps, miniimumStepsToOne(n / 3, mem));
  }

  // return min # steps to 1 from num
  mem[n] = 1 + steps;
  return 1 + steps;
}
console.log(miniimumStepsToOne(54));

function miniimumStepsToOneTab(n) {
  // tabulation// build an array using a loop,
  // storing the correct answers in each element of the array

  //let result = minimumStepsT

  // init tab
  let tab = newArray(n + 1);

  //apply to base case to tab
  tab[1] = 0;
}
