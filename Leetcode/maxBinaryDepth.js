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

// const queue = [1,2,3,4,5];
// stack.push(6);
// stack.shift();  // out1

// const root = [3,9,20,null,null,15,7]
// var maxDepth = function (root) {
//   if (!root) {
//     return [];
//   }
//   const q = [root, null]; // [3, null ,9, 20, null, 11, 13, 15, 7, null]
//   let current;
//   // "i" keeps track of the level of the tree
//   let i = 1;
//   while (q.length > 1) {
//     // greater than one since the queue will always have an null in it.
//     current = q.shift();
//     // null signifies the end of a level.
//     if (current === null) {
//       // null is pushed into the queue to signify the last child was added.
//       q.push(null);
//       // increase i by one to move to the next level/sub-array in the results.
//       i++;
//     } else {
//       // add the children to the queue if they exist
//       if (current.left) {
//         q.push(current.left);
//       }
//       if (current.right) {
//         q.push(current.right);
//       }
//     }
//   }
//   return i;
// };

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  var stack = [[root, 1]]; // [[node, level], [childNodes, level],[childNodes, level]]
  var results = [];
  let max_depth = 0;
  while (stack.length) {
    current = stack.pop();
    if (!current[0].left && !current[0].right) {
      max_depth = Math.max(max_depth, current[1]);
    } else {
      if (current[0].right) {
        stack.push([current[0].right, current[1] + 1]);
      }
      if (current[0].left) {
        stack.push([current[0].left, current[1] + 1]);
      }
    }
  }
  return max_depth;
};

// var maxDepth = function(root, level = 1) {
//     if(!root){
//         return 0;
//     }

//     if(!root.left && !root.right){
//         return level;
//     }

//     let max_depth = 0;
//     if(root.left){
//         max_depth = Math.max(maxDepth(root.left, level + 1), max_depth)
//     }
//     if(root.right){
//         max_depth = Math.max(maxDepth(root.right, level + 1), max_depth)
//     }

//     return max_depth;
// }
