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
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  search(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return [current, index];
      }

      current = current.next;
      index++;
    }
    return false;
  }
  insert(index, value) {
    if (index > this.length || index < 0) {
      return undefined;
    }
    if (index === this.length) {
      this.add(value);
      return this.length;
    }

    let current = this.head;
    let currentIndex = 0;
    let prevNode = this.head;
    let newNode = new Node(value);
    while (currentIndex < index) {
      prevNode = current;
      current = current.next;
      currentIndex++;
    }
    prevNode.next = newNode;
    newNode.next = current;
    this.length++;
    return this.length;
  }

  /// 3 -> 4 -> 5 -> 2 -> 8
  //
  ///
  ///
  remove(index) {}
}

let newList = new LinkedList();
console.log(newList.add(3));
newList.add(4);
newList.add(2);
newList.add(8);
console.log(newList.insert(2, 5));
console.log(newList);
console.log(newList);
