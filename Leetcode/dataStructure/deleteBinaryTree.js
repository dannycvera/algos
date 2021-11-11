var deleteNode = function(root, key) {
  if(root === null){
      return null;
  }
  
  let node = root;
  let parent = null;
  let pSide = "left";
  const remove = (node) => {
      
      // store extra nodes down to the leaves
      let otherNodes = null;
      
      // the var side needs to have a valide value to start. Could start with right. 
      // Untill I find an edge case where it can't!
      let side = "left"; 
      // check if the right or left side exists
      // store the other nodes not used to replace the removed node
      // if left exists store the right side nodes and remove the reference to them from the node you are deleting 
      // and set the side variable for the next step
      if(node.right){
          side = "right";
          otherNodes = node.left;
          node.left = null;
      } else if(node.left){
          side = "left";
          otherNodes = node.right;
          node.right = null;
      }
  
      // remove the node to be deleted and replace it with
      // the one of the nodes below it 
      if(parent === null){
          root = node[side];
          node[side] = null;
          node = root;
      } else {
          parent[pSide] = node[side];
          node[side] = null;
          node = parent[pSide];
      }  
      
      // attach the other left over nodes to the oposite side and at the end 
      side = side === "left" ? "right":"left";
      while(node !== null){
          if(node[side] === null){
              node[side] = otherNodes;
              break;
          } else {
              node = node[side];   
          }
      }
  }
  
  // find the node to remove
  // keep track of the parent node
  while(node !== null){
      if(node.val > key){
          parent = node;
          node = node.left;
          pSide = "left";
      } else if(node.val < key){
          parent = node;
          node = node.right;
          pSide = "right";
      } else if(node.val === key) {
          // remove references to and from the deleted node
          remove(node);
          break;
      }
  }
  
  return root;
};