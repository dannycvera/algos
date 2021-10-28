class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
    this.front = null;
  }
  push(val) {
    if (stack1.length === 0) {
      this.front = val;
    }
    stack1.push(val);
  }
  pop() {
    if (stack2.length === 0) {
      while (stack1.length !== 0) {
        stack2.push(stack1.pop());
      }
    }
    stack2.pop();
  }
}
