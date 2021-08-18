// Tree properties:

// Trees have no set path
// Non-linear data structure
// Hierarchical
// Acyclic
// Recursive

//BST class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  find(val) {
    // if (this.root === null) return null;
    let current = this.root;
    while (current !== null) {
      if (current.val === val) return current;
      if (current.val < val) {
        current = current.right;
      } else if (current.val > val) {
        current = current.left;
      }
    }
    return null;
  }
  insert(val) {
    var newNode = new TreeNode(val);
    if (!root) {
      root = newNode;
      return root;
    }
    var current = root;
    while (true) {
      if (val === current.val) {
        return undefined;
      }
      if (current.val > val) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return root;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return root;
        }
      }
    }
  }
  remove(val) {}
  bfs() {}

  dfspo(node = this.root, result = []) {
    if (node === null) return;
    result.push(node.val);
    dfspo(node.left, result);
    dfspo(node.right, result);
  }
}
