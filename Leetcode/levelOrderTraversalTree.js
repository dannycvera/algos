var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const q = new Queue();
  q.enqueue(root);
  let current = new TreeNode("end");
  q.enqueue(current);
  const results = [[]];

  let i = 0;
  while (q.size() > 1) {
    current = q.dequeue();
    if (current.val === "end") {
      q.enqueue(current);
      results.push([]);
      i++;
    } else {
      results[i].push(current.val);
      if (current.left) {
        q.enqueue(current.left);
      }
      if (current.right) {
        q.enqueue(current.right);
      }
    }
  }
  return results;
};
