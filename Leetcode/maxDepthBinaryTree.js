var maxDepth = function (root) {
  if (root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// var maxDepth = function (root, level = 1) {
//   if (!root) {
//     return 0;
//   }

//   if (!root.left && !root.right) {
//     return level;
//   }

//   let max_depth = 0;
//   if (root.left) {
//     max_depth = Math.max(maxDepth(root.left, level + 1), max_depth);
//   }
//   if (root.right) {
//     max_depth = Math.max(maxDepth(root.right, level + 1), max_depth);
//   }

//   return max_depth;
// };
// var maxDepth = function(root) {
//     if(!root){
//         return [];
//     }
//     const q = [root, null];  // [3, null ,9, 20, "end", 15, 7, null]
//     let current;
//     // "level" keeps track of the level of the tree
//     let level = 1;
//     while(q.length > 1){ // greater than one since the queue will always have an null in it.
//         current = q.shift();
//         // "end" signifies the end of a level.
//         if(current === null){
//             // "end" is pushed into the queue to signify the last child was added.
//             q.push(null);

//             // increase level by one to move to the next level/sub-array in the results.
//             level++;
//         } else {
//             // add the childrean to the queue if they exist
//             if(current.left){
//                q.push(current.left)
//            }
//             if(current.right){
//                q.push(current.right)
//            }
//         }
//     }
//     return level;
// };

// var maxDepth = function(root) {
//     if(!root){
//         return 0;
//     }

//     var stack = [[root, 1]];   // [[node, level], [childNodes, level],[childNodes, level]]
//     var results = [];
//     let max_depth = 0;
//     let level = 0;
//     while (stack.length) {
//       current = stack.pop();
//       if(!current[0].left && !current[0].right){
//         max_depth = Math.max(max_depth, current[1]);
//       } else{
//           if (current[0].right) {
//             stack.push([current[0].right, current[1] + 1]);
//           }
//           if (current[0].left) {
//             stack.push([current[0].left, current[1] + 1]);
//           }
//       }
//     }
//     return max_depth;
// };
