class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(2);
root.left = new Node(1);
root.right = new Node(3);
