var insertIntoBST = function (root, val) {
  var newNode = new TreeNode(val);
  if (!root) {
    root = newNode;
    return root;
  }
  var current = root;
  while (true) {
    if (val === current.val) {
      return undefined;
    }
    if (current.val > val) {
      if (current.left) {
        current = current.left;
      } else {
        current.left = newNode;
        return root;
      }
    } else {
      if (current.right) {
        current = current.right;
      } else {
        current.right = newNode;
        return root;
      }
    }
  }
  // return root;
};
