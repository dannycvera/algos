class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);

    // if (this.head !== null) {
    let oldHead = this.head;
    // }
    this.head = node;
    this.head.next = oldHead;
    this.size++;
    return this.size;
  }

  /*
   (head) 2 -> 5 -> 1 -> null
  */

  pop() {
    let oldHead = this.head;
    if (this.head === null) return null;
    this.head = this.head.next;
    oldHead.next = null;
    this.size--;
    return oldHead.value;
  }
  /*
   (head) null
  */
  peek() {
    if (this.head !== null) {
      return this.head.value;
    }
    return null;
    //return node.val of the top of the stack
  }
  /*
   (head) null
  */
  isEmpty() {
    if (this.size === 0) {
      return true;
    }
    return false;
  }

  getSize() {
    return this.size;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(5);
myStack.push(2);
console.log(myStack.pop()); // returns 2
console.log(myStack.peek()); // return 5
console.log(myStack.isEmpty()); // return false
console.log(myStack.getSize()); // return 2
console.log(myStack.pop());
console.log(myStack.pop());
