class MaxBinaryHeap {
  constructor(values = []) {
    this.values = values;
    if (values.length > 0) {
      this.bubble();
    }
  }
  insert(val) {
    this.values.push(val);
    return this.bubble();
  }

  heapify(value) {}

  bubble(i = this.values.length - 1) {
    var parent;
    var sorted = false;

    while (!sorted) {
      parent = Math.floor((i - 1) / 2);
      if (this.values[i] > this.values[parent]) {
        this.swap(i, parent);
        i = parent;
      } else {
        sorted = true;
      }
    }
    return this.values;
  }
  extractMax() {
    var maxVal = this.values[0];
    if (this.values.length < 2) {
      return this.values.pop();
    }
    this.values[0] = this.values.pop();
    this.sinkDown(0);
    return maxVal;
  }
  swap(a, b) {
    var temp = this.values[a];
    this.values[a] = this.values[b];
    this.values[b] = temp;
  }
  sinkDown(index) {
    var sorted = false;
    var child1;
    var child2;
    var endIndex = this.values.length - 1;
    while (!sorted) {
      child1 = 2 * index + 1;
      child2 = 2 * index + 2;
      if (
        (this.values[child1] <= this.values[index] || child1 > endIndex) &&
        (this.values[child2] <= this.values[index] || child2 > endIndex)
      ) {
        sorted = true;
        return;
      }
      if (this.values[child1] >= this.values[child2] || child2 > endIndex) {
        this.swap(index, child1);
        index = child1;
      } else {
        this.swap(index, child2);
        index = child2;
      }
    }
  }
}

var findKthLargest = function (nums, k) {
  const maxHeap = new MaxBinaryHeap(nums);
  for (let i = 0; i < k - 1; i++) {
    maxHeap.extractMax();
  }
  return maxHeap.extractMax();
};
let nums = [3, 2, 1, 5, 6, 4];
let k = 2;

console.log(findKthLargest(nums, k));
