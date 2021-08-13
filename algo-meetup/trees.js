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
  insert(val) {}
  remove(val) {}
}
