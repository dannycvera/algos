const root = [1, 2, 3, 4, 5, null, 7];

function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

var connect = function (root) {
  if (root === null) {
    return root;
  }
  const q = [root]; // start queue with root node

  let node; // defining a temp variable to hold the current node

  while (q.length) {
    // as long as the queue has nodes in it
    let size = q.length; // storing the size of the queue on each itiration of the while loop.
    // each while loop is essentially all the siblings of a tree.
    // for loop only runs when i is less than the size of the while loop queue.
    // When you run out of siblings, while loop runs again with a new size
    for (let i = 0; i < size; i++) {
      node = q.shift();
      // set the next value to the next value in the queue, since they are all siblings.
      // when the last sibling is the current node, no next value is set.
      if (i < size - 1) {
        node.next = q[0];
      }
      // adds children to the queue. Next while loop they become siblings.
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
  }

  return root;
};
