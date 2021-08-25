var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  const q = new Queue();
  q.enqueue(root);
  q.enqueue(null); // null signifies the end of a level of parents
  let level = 1;
  let current;
  while (q.size() > 1) {
    current = q.dequeue();
    if (current === null) {
      q.enqueue(null); //siginifies the last child was previously added on a level.
      level++; //increase level by one since we've hit the end of the current level
    } else if (!current.left && !current.right) {
      // first hit on a leaf node returns the level.
      // dont need to explore any further.
      return level;
    } else {
      if (current.left) {
        q.enqueue(current.left);
      }
      if (current.right) {
        q.enqueue(current.right);
      }
    }
  }
};
