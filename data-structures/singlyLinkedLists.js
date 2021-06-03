// piece of data - val
//reference to next node -next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    var current = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      var newTail = current;
      while (current.next != null) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
    }
    this.length--;
    return current;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    var oldHead = this.head;
    if (this.length === 1) {
      this.tail = null;
    }
    this.head = oldHead.next;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }

  unShift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    var pos = 0;
    var current = this.head;
    while (index > pos) {
      current = current.next;
      pos++;
    }

    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return !!this.unShift(val);
      // return true;
    } else if (index === this.length) {
      return !!this.push(val);
      // return true;
    } else {
      var newNode = new Node(val);

      var preNode = this.get(index - 1);
      if (preNode) {
        newNode.next = preNode.next;
        preNode.next = newNode;
        this.length++;
      }
      return true;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      var preNode = this.get(index - 1);
      var removedNode = preNode.next;
      preNode.next = removedNode.next;
      removedNode.next = null;
      this.length--;
      return removedNode;
    }
  }
  reverse() {
    var prevNode = null;
    var nextNode;
    var current = this.head;
    this.head = this.tail;
    this.tail = current;
    var pos = 0;
    while (pos < this.length) {
      nextNode = current.next;
      current.next = prevNode;
      prevNode = current;
      current = nextNode;
      pos++;
    }
    return this;
  }
}

var list = new SinglyLinkedList();
list.push("Hello");
list.push("sky");
list.push("GoodBye");
list.push("world");
list.reverse();
console.log(list.pop());
console.log(list.shift());
