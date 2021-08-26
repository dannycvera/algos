function minStepsToOne(num) {
  // BFS search for minimum steps to num

  // edge case if 1 is passed as num.
  if (num === 1) {
    return 0;
  }
  let steps = 0; // return the steps once the number one is reached
  const q = [num, null]; // null sigifies the end of a level of the BST
  let current;
  while (q.length > 1) {
    current = q.shift();
    if (current === null) {
      // null signifies the last result on a level was reached
      q.push(null); // once the last parent was extracted from the queue,
      steps++; // you can expect the last child was added in the previous iteration.
    } else if (current % 3 === 0) {
      // there will only two possible results.
      // Either dividing by 2 or 3 or by subtracting 1
      q.push(current / 3);
    } else if (current % 2 === 0) {
      q.push(current / 2);
    } else if (current === 1) {
      return steps; // once one is reached. Return steps and stop checking for solutions.
    }
    q.push(current - 1);
  }
}

console.log(minStepsToOne(10000000));
