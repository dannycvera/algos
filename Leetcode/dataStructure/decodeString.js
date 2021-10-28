var decodeString = function (s) {
  const stringStack = new Stack();
  const countStack = new Stack();
  let decodedString = "";
  let currentString = "";
  let n = "";
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      n = n.concat(s[i]);
    } else if (s[i] === "[") {
      countStack.push(Number(n));
      n = "";
      stringStack.push(currentString);
      currentString = "";
    } else if (s[i] === "]") {
      decodedString = stringStack.pop().value;
      currentString = currentString.repeat(countStack.pop().value);
      decodedString = decodedString.concat(currentString);
      currentString = decodedString;
    } else {
      currentString = currentString.concat(s[i]);
    }
  }
  return currentString;
};

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
