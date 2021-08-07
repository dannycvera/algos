var dailyTemperatures = function (temperatures) {
  const results = new Array(temperatures.length);
  results.fill(0);
  const stack = new Stack();
  stack.push(0);
  let last;
  for (let i = 1; i < temperatures.length; i++) {
    // optimization that knocks off 20% or so
    // basically only adding to the stack if the preceding temperature is not less than the current
    // if (temperatures[i] <= temperatures[i - 1]) {
    //   stack.push(i - 1);
    // } else {
    //   results[i - 1] = 1;
    while (!stack.isEmpty() && temperatures[stack.peek()] < temperatures[i]) {
      last = stack.pop().value;
      results[last] = i - last;
    }
    stack.push(i); // remove this line when using the optimization
    // }
  }
  return results;
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

// [73,74,75,71,69,72,76,73]
//      i
//
// stack = [[73,0],]
//
//
//
//
//
//
//
