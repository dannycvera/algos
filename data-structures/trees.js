class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    var newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    var placed = false;
    while (!placed) {
      if (val === current.val) {
        return undefined;
      }
      if (current.val > val) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          placed = true;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          placed = true;
        }
      }
    }
    return this;
  }
  find(val) {
    if (!this.root) {
      return null;
    }
    var missing = false;
    var current = this.root;
    while (!missing) {
      if (current.val === val) {
        return current;
      } else if (current.val > val) {
        if (current.left) {
          current = current.left;
        } else {
          missing = true;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          missing = true;
        }
      }
    }
    return null;
  }
  BFS() {
    var q = [];
    var results = [];
    var current = this.root;
    q.push(current);

    while (q.length) {
      current = q.shift();
      results.push(current);
      if (current.left) {
        q.push(current.left);
      }
      if (current.right) {
        q.push(current.right);
      }
    }
    return results;
  }
  // iterative DFS - preorder
  DFSiterative() {
    var stack = [];
    var data = [];
    var current = this.root;
    stack.push(current);
    while (stack.length) {
      current = stack.pop();
      data.push(current);
      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
    }
    return data;
  }
  // DFS - PreOrder recursively
  DFSPreOrder(start = this.root) {
    var data = [];
    // var current = this.root;
    function traverse(node) {
      data.push(node);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      return data;
    }
    return traverse(start);
  }
  DFSPostOrder(start = this.root) {
    var data = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node);
      return data;
    }
    return traverse(start);
  }

  DFSInOrder(start = this.root) {
    var data = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node);
      if (node.right) {
        traverse(node.right);
      }
      return data;
    }
    return traverse(start);
  }
}
//     10
//  6      15
//3   8  11  20
var tree = new BST();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
// tree.insert(11);
tree.insert(20);
console.log(tree);
