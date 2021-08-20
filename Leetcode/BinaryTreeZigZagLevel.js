var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }
  // thought I needed a stack and a queue, but they are really just both stacks
  // while one is popping out parents the children are pushed into the other stack
  // with the right Stack receiving the children in the oposite order
  // by nature stacks output in the opposite order they recieve elements
  const rStack = [root];
  const lStack = [];
  const results = [];
  let toRight = true;
  let len = rStack.length;
  let level;
  let current;
  while (len > 0) {
    level = [];
    for (let i = 0; i < len; i++) {
      if (toRight) {
        current = rStack.pop();
        if (current.left) {
          lStack.push(current.left);
        }
        if (current.right) {
          lStack.push(current.right);
        }
      } else {
        current = lStack.pop();
        // reverse order of pushing in the children when outputting to the left direction
        if (current.right) {
          rStack.push(current.right);
        }
        if (current.left) {
          rStack.push(current.left);
        }
      }
      level.push(current.val);
    }
    toRight = !toRight;
    if (toRight) {
      len = rStack.length;
    } else {
      len = lStack.length;
    }
    results.push(level);
  }
  return results;
};

//  [[3],[20,9],[15,7]]
//  q = [ 9, 15, 7]
//
//
//
//
