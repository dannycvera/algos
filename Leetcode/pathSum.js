// var hasPathSum = function(root, targetSum) {
//     if(!root){
//         return false;
//     }

//     const helper = (node, sum = 0) =>{
//         sum += node.val;
//         if(!node.left &&!node.right){
//             if(sum === targetSum){
//                 return true;
//             }

//         }
//         let left = false;
//         let right = false;

//         if(node.left){
//             left = helper(node.left, sum);
//         }
//         if(node.right){
//             right = helper(node.right, sum);
//         }

//         return left || right;
//     }

//     return helper(root);
// };

// var hasPathSum = function(root, targetSum) {
//     if(!root){
//         return false;
//     }
//     const stack = [[root, 0]];
//     let current;
//     let node;
//     let prevSum = 0;
//     while(stack.length > 0){
//         [node, prevSum] = stack.pop();
//         prevSum += node.val;
//         if(!node.left && !node.right && prevSum === targetSum){
//             return true;
//         }
//         if(node.left){
//             stack.push([node.left, prevSum]);
//         }
//         if(node.right){
//             stack.push([node.right, prevSum]);
//         }
//     }
//     return false;
// }

//          5
//         /\
//        4. 8.
//       /\
//      11 16
//
//
//
// var hasPathSum = function (root, sum) {
//   return dfs(root, 0, sum);
// };

// var dfs = function (curr, currentSum, targetSum) {
//   if (!curr) {
//     return false;
//   }

//   currentSum += curr.val; //11

//   if (curr.left === null && curr.right === null) {
//     return currentSum === targetSum;
//   }

//   return (
//     dfs(curr.left, currentSum, targetSum) ||
//     dfs(curr.right, currentSum, targetSum)
//   );
// };
// var hasPathSum = function(root, targetSum) {
//     if(root === null) return false;
//     targetSum -= root.val;
//     if(root.left === null && root.right === null) {
//         return targetSum === 0;
//     }
//     return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
// }
