class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    newNode.next = null;

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    var oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;
    return oldTail;
  }
  shift() {
    if (this.length === 0) {
      return undefined;
    }

    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
    }
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    var counter;
    var current;
    if (index > this.length / 2) {
      console.log("working from end");
      counter = this.length - 1;
      current = this.tail;
      while (index < counter) {
        current = current.prev;
        counter--;
      }
    } else {
      console.log("working from begining");
      counter = 0;
      current = this.head;
      while (index > counter) {
        current = current.next;
        counter++;
      }
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
    if (index < 0 || index >= this.length) {
      return false;
    } else if (index === 0) {
      return !!this.unshift(val);
    } else if (index === this.length) {
      return !!this.push(val);
    } else {
      var beforeNode = this.get(index - 1);
      var newNode = new Node(val);
      var afterNode = beforeNode.next;
      newNode.prev = beforeNode;
      newNode.next = afterNode;

      afterNode.prev = newNode;
      beforeNode.next = newNode;

      this.length++;
      return true;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    var removeNode = this.get(index);
    var beforeNode = removeNode.prev;
    var afterNode = removeNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removeNode.next = null;
    removeNode.prev = null;
    this.length--;
    return removeNode;
  }
  reverse() {
    if (this.length < 2) {
      return this;
    }
    var current = this.head;
    var temp;
    for (var i = 0; i < this.length; i++) {
      temp = current.next;
      current.next = current.prev;
      current.prev = temp;
      current = current.prev;
    }

    temp = this.tail;
    this.tail = this.head;
    this.head = temp;

    return this;
  }
}

var list = new DoublyLinkedList();
list.push("hi");
list.push("there");
list.push("you");
list.push("crazy");
list.push("diamond");
list.push("shine");
list.push("on");
list.get(5);
list.get(2);
