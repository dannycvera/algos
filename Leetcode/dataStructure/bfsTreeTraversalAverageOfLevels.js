var averageOfLevels = function (root) {
  if (!root) {
    return [];
  }
  // const q = [root];
  const q = new Queue();
  q.enqueue(root);
  const result = [];
  let current;
  let sum = 0;
  let qLen;
  while (q.size() > 0) {
    qLen = q.size();
    for (let i = 0; i < qLen; i++) {
      current = q.dequeue();
      sum = sum + current.val;
      if (current.left) {
        q.enqueue(current.left);
      }
      if (current.right) {
        q.enqueue(current.right);
      }
    }
    result.push(sum / qLen);
    sum = 0;
  }
  return result;
};
