// stacks is a LIFO / last in first out data structer.
// In a pinch an array can be used with push and pop
var stack = [];
stack.push("google");
stack.push("instagram");
stack.push("youtube");
stack.pop();
// returns "youtube"
stack.pop();
// returns 'instagram

// stacks could be built using a singly linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    // using code from unshift
    // since push and pop need to use loops to get the second to last item
    var newNode = new Node(val);

    if (this.size === 0) {
      this.last = newNode;
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this.size;
  }
  pop() {
    if (this.size === 0) {
      return null;
    }

    var removeNode = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = removeNode.next;
    removeNode.next = null;

    this.size--;
    return removeNode.val;
  }
}

var stack = new Stack();
stack.push(3);
stack.push(2);
stack.push(1);
