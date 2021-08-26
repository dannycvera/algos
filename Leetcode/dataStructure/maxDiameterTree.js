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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let diam = 0;
  const helper = (node) => {
    if (!node) {
      return 0;
    }
    let left = helper(node.left);
    let right = helper(node.right);

    maxDepth = Math.max(left, right);
    diam = Math.max(left + right, diam);

    return maxDepth + 1;
  };

  helper(root);
  return diam;
};

//         1
//.       /\
//       2  3
//      /\
//    4   5
//   /\   /\
// 11 10 6 7
//       /\
//      8. 9
