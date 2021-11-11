var lowestCommonAncestor = function (root, p, q) {
  let parent;

  if (!root) {
    return false;
  }
  let left = false;
  let right = false;
  let nVal = root.val;
  let pVal = p.val;
  let qVal = q.val;

  if (nVal > pVal && nVal > qVal) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (nVal < pVal && nVal < qVal) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};
