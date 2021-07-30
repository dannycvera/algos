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
  push(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
    return this.size;
  } // add to head

  pop() {
    const result = this.head;
    if (result) {
      this.head = result.next;
      result.next = null;
      this.size--;
    }
    return result;
  } // remove from head
  peek() {
    if (this.head) {
      return this.head.value;
    }
    return null;
  } // return value of the head
  isEmpty() {
    if (this.head) {
      return false;
    }
    return true;
  }
  getSize() {
    return this.size;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
    this.size++;
    return this.size;
  } // add to tail. return size
  dequeue() {
    if (!this.head) {
      return null;
    }
    const result = this.head;
    this.head = result.next;
    result.next = null;
    this.size--;
    if (this.size === 0) {
      this.tail = null;
    }
    return result;
  } // return head

  peek() {
    if (this.head) {
      return this.head.value;
    }
    return null;
  } // return value of head
  isEmpty() {
    if (this.head) {
      return false;
    }
    return true;
  }
  getSize() {
    return this.size;
  }
}

const stack = new Stack();
stack.push(2);
stack.push(8);
stack.push(5);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop()); //should return 3
console.log(stack.peek()); //should return 5
console.log(stack.isEmpty()); //should return false
console.log(stack.getSize()); //should return the size of 3

const q = new Queue();
q.enqueue(7);
q.enqueue(5);
q.enqueue(8);
q.enqueue(2);
console.log(q.dequeue());
console.log(q.dequeue());
// console.log(q.dequeue());
console.log(q.peek()); //should return 2
// console.log(q.dequeue());
console.log(q.isEmpty()); //should return false
console.log(q.getSize()); //should return the size of 3
