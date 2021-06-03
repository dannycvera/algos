class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  // minBinaryHeap
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    var node = new Node(val, priority);

    this.values.push(node);
    if (this.values.length < 2) {
      return this.values;
    }
    return this.bubble();
  }
  bubble(i = this.values.length - 1) {
    var parent;
    var sorted = false;
    while (!sorted && i > 0) {
      parent = Math.floor((i - 1) / 2);
      if (this.values[parent].priority > this.values[i].priority) {
        this.swap(parent, i);
        i = parent;
      } else {
        sorted = true;
      }
    }
    return this.values;
  }
  dequeue() {
    var minPriority = this.values[0];
    if (this.values.length < 2) {
      return this.values.pop();
    }
    this.values[0] = this.values.pop();
    this.sink(0);
    return minPriority;
  }
  sink(i = 0) {
    var child1;
    var child2;
    var length = this.values.length;
    while (i < length) {
      child1 = 2 * i + 1;
      child2 = 2 * i + 2;
      if (
        (child1 >= length ||
          this.values[child1].priority > this.values[i].priority) &&
        (child2 >= length ||
          this.values[child2].priority > this.values[i].priority)
      ) {
        return;
      }

      if (
        child2 >= length ||
        this.values[child1].priority < this.values[child2].priority
      ) {
        this.swap(i, child1);
        i = child1;
      } else {
        this.swap(i, child2);
        i = child2;
      }
    }
  }
  swap(a, b) {
    var temp = this.values[a];
    this.values[a] = this.values[b];
    this.values[b] = temp;
  }
}

var priQue = new PriorityQueue();
priQue.enqueue("headache", 6);
priQue.enqueue("broken Arm", 3);
priQue.enqueue("broken nose", 4);
priQue.enqueue("cough", 5);
priQue.enqueue("gun shot", 2);

priQue.enqueue("Heart Attach", 1);
priQue.enqueue("Eye gougue", 2);
priQue.enqueue("Hang Nail", 9);
priQue.enqueue("runny nose", 5);
priQue.enqueue("ear ache", 6);
priQue.enqueue("scratch on hand", 9);
console.log(priQue);
priQue.dequeue();
priQue.dequeue();
priQue.dequeue();
priQue.dequeue();
