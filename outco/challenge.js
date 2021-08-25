function minStepsToOne(num) {
  // BST search for minimum steps to num

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
      q.push(null);
      // once the last parent was extracted from the queue,
      // you can expect the last child was added in the previous iteration.
      steps++;
    } else if (current === 1) {
      // once one is reached. Return steps
      return steps;
    } else {
      // there will only two possible results from the current number
      // Either dividing by 2 or 3 and subtracting 1

      // push either the result of dividing 2 or 3 into the queue
      if (current % 3 === 0) {
        q.push(current / 3);
      } else if (current % 2 === 0) {
        q.push(current / 2);
      }
      // and push the result of subtracting 1
      q.push(current - 1);
    }
  }
}

console.log(minStepsToOne(10000000));
