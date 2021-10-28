class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  // Function to convert a binary tree into its mirror tree.
  mirror(node) {
    // your code here

    let temp = node.left;
    node.left = node.right;
    node.right = temp;
    if (node.left !== null) {
      this.mirror(node.left);
    }

    if (node.right !== null) {
      this.mirror(node.right);
    }
  }
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
console.log(tree);
const solution = new Solution();

solution.mirror(tree);
console.log(tree);
