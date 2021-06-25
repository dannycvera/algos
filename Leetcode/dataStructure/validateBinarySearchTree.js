/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (node, low = -Infinity, high = Infinity) {
  if (node === null) {
    return true;
  }
  if (node.val <= low || node.val >= high) {
    return false;
  }
  return (
    isValidBST(node.left, low, node.val) &&
    isValidBST(node.right, node.val, high)
  );
};
