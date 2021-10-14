class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
    return value;
  }
  search(value) {
    if (!this.head) return null;
    let current = this.head;

    while (current) {
      if (current.value == value) return current;
      current = current.next;
    }
    return null;
  }
  insert(index, value) {
    // failed insert past the length of the list
    if (index > this.length || index < 0) return false;

    if (index === 0) {
      // if inserting at head
      this.addToHead(value);
    } else if (index === this.length) {
      // insert at the end of list
      this.add(value);
    } else {
      // create new node
      let node = new Node(value);
      // find the previous node to link the new node to
      // then move the node in the place of inertion over one
      let prev = this.getNode(index - 1);
      node.next = prev.next;
      prev.next = node;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index >= this.length || index < 0) return false;
    if (index === 0) {
      let current = this.head;
      this.head = this.head.next;
      current.next = null;
    } else if (index === this.length) {
      let prev = this.getNode(index - 1);
      prev.next = null;
      this.tail = prev;
    } else {
      let prev = this.getNode(index - 1);
      let current = prev.next;
      prev.next = current.next;
      current.next = null;
    }
    this.length--;
    return true;
  }

  getNode(index) {
    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }

  addToHead(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return true;
  }
}

const myList = new LinkedList();
myList.add("a"); //0
myList.add("c"); //1
myList.add("f"); //2
myList.add("h"); //3
myList.add(1); //4
console.log(myList.search("a"));
console.log(myList.insert(3, "Z"));
console.log(myList.remove(-1));
