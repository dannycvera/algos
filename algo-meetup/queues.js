class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    // remove from head!!!
    // add to tail
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(val) {
    // add to tail
    let node = new Node(val);
    if (this.tail === null) {
      this.head = node;
    } else {
      // tail is not null
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
    return this.size;
  }
  /*
    head 2 -> 5 -> 1 -> null tail
    head null tail
    head 1 -> null tail
    head 5 -> 1 -> null tail
*/

  dequeue() {
    // remove from head
    if (this.tail === null) {
      // size is 0
      return null;
    }
    let oldHead = this.head;
    if (this.tail === this.head) {
      // only a single node
      this.tail = null;
      this.head = null;
    } else {
      // if size greater than 1
      this.head = this.head.next;
    }
    oldHead.next = null;
    this.size--;
    return oldHead.value;
  }

  peek() {
    if (this.head !== null) {
      return this.head.value;
    }
    return null;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}
/*
head 2 -> 5 -> 1 -> null tail
head null tail
head 1 -> null tail
head 5 -> 1 -> null tail
*/
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(4);
myQueue.enqueue(3);
console.log(myQueue.dequeue()); // returns 1
console.log(myQueue.dequeue()); // returns 1
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.isEmpty());
console.log(myQueue.getSize());
