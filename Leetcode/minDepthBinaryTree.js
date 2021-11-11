// var minDepth = function(root, result = 1) {
//     // the tree is empty
//     if(!root){
//         return 0;
//     }
//     // leaf node is found
//     if(!root.left && !root.right){
//         return result;
//     }

//     let min_depth = Infinity;
//     // check if left or right exists before finding the min depth for each side
//     if(root.left){
//         min_depth = Math.min(minDepth(root.left, result + 1), min_depth);
//     }
//     if(root.right){
//         min_depth = Math.min(minDepth(root.right, result + 1), min_depth);
//     }

//     return min_depth;
// };

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
