// Queues is a FIFO First in First Out data structure
// Could use an array

var q = [];
//inserting is fast
q.push(1);
q.push(2);
q.push(3);
// removing is slow
q.shift();
//returns 1
q.shift();
//returns 2
q.shift();
// returns 3

// inserting is slow
q.unshift(1);
q.unshift(2);
q.unshift(3);

//removing is fast
q.pop();
//returns 1
q.pop();
//returns 2
q.pop();
//returns 3

// better to build a Queue class

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // unshift to the beginging.
  // remember the direction of next is reversed for queues
  enqueue(val) {
    var newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var oldLast = this.last;
      this.last = newNode;
      oldLast.next = newNode;
    }

    this.size++;
    return this.size;
  }

  // pop from the end
  // remember the direction of next is reversed for queues
  dequeue() {
    if (this.size === 0) {
      return undefined;
    }
    var removeNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      var secondNode = removeNode.next;
      removeNode.next = null;
      this.first = secondNode;
    }
    this.size--;
    return removeNode;
  }
}

//next    > > >
//first   1 2 3 last
//dequeue       enqueue

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue;
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
