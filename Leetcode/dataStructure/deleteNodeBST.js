var deleteNode = function(root, key) {
    
  // if the root node is null return root or null
  if(root === null){
      return root;
  }
  // need a parent node to latch onto if the root has the value we are looking for
  let parent = new TreeNode(-1, root);
  let next;
  let current = root;
  let parentNext = null;
  
 // find node to delete and save to variable with the parent node
  while(current.val !== key){
     if(key < current.val){
          parent = current;
          current = current.left;
      } else {
          parent = current;
          current = current.right;
      }
      if(current === null) return root; // cant delete, not found
  }
  
  // then find the next node that is slightly larger in value
  
  
  // three posibilities right is null or left is null then just make next equal to the side which is not null
  if(current.right === null) {
      next = current.left;
  } else  if(current.left === null){
      next = current.right;
  } else {
      // find the next larger value and set it to next
      // append the current.left to the next
      next = current.right;
      while(next.left !== null){
          parentNext = next;
          next = next.left;
      }
      next.left = current.left;
  }
  
  // swap nodes and then delete appropriate node
  // and move any children that are greater in value over to the position that was just deleted
  // set parent child to next node
  
  if(parent.left === current){
      parent.left = next;    
  } else {
      parent.right = next;
  }
  
  // swap child nodes 
  if(parentNext !== null){ 
      // if the parent of the next larger value is NOT the current node to be deleted
      parentNext.left = next.right;
      next.right = current.right;
  }
 
  // cut off references to the deleted node as well as it's children
  current.left = null;
  current.right = null;
  if(parent.val === -1){  // the root is the one to be swapped out so just return the next value instead of root
      return next;
  } 
  return root;
}