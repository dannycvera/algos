var searchBST = function (root, val) {
  let current = root;
  while (current !== null) {
    if (current.val === val) return current;
    if (current.val < val) {
      current = current.right;
    } else if (current.val > val) {
      current = current.left;
    }
  }
  return null;
};
