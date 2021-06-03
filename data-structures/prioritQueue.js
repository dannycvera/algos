class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  // minBinaryHeap
  constructor() {
    this.value = [];
  }
  enqueue(val, priority) {
    var node = new Node(val, priority);

    this.value.push(node);
    if (this.value.length < 2) {
      return this.value;
    }
    return this.bubble();
  }
  bubble(i = this.value.length - 1) {
    var parent;
    var sorted = false;
    while (!sorted && i > 0) {
      parent = Math.floor((i - 1) / 2);
      if (this.value[parent].priority > this.value[i].priority) {
        this.swap(parent, i);
        i = parent;
      } else {
        sorted = true;
      }
    }
    return this.value;
  }
  dequeue() {
    var maxPriority = this.value[0];
    if (this.value.length < 2) {
      return this.value.pop();
    }
    this.value[0] = this.value.pop();
    this.sink(0);
    return maxPriority;
  }
  sink(i = 0) {
    var child1;
    var child2;
    var length = this.value.length;
    while (i < length) {
      child1 = 2 * i + 1;
      child2 = 2 * i + 2;
      if (
        (child1 >= length ||
          this.value[child1].priority > this.value[i].priority) &&
        (child2 >= length ||
          this.value[child2].priority > this.value[i].priority)
      ) {
        return;
      }

      if (
        child2 >= length ||
        this.value[child1].priority < this.value[child2].priority
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
    var temp = this.value[a];
    this.value[a] = this.value[b];
    this.value[b] = temp;
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
