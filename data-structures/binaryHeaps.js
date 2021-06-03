//BinarySearchTree: max two children for each node
//MaxBinaryHeap: the parent is larger than the children
//MinBinaryHeap: the parent is always smaller than the parents
//the children across nodes have no relation to size
//array representations of heaps
//parrent -> child : if the  index of the parrent is i, the child is at 2 * i + 1, and the second child is at 2 * i + 2
// child -> parrent: parent is located at Math.floor((i - 1)/2) of the index of the child

class MaxBinaryHeap {
  constructor() {
    this.value = [];
  }
  insert(val) {
    this.value.push(val);
    return this.bubble();
    // return this.value;
  }
  bubble(i = this.value.length - 1) {
    var parent;
    // var temp;
    var sorted = false;

    while (!sorted) {
      parent = Math.floor((i - 1) / 2);
      if (this.value[i] > this.value[parent]) {
        this.swap(i, parent);
        i = parent;
      } else {
        sorted = true;
      }
    }
    return this.value;
  }
  extractMax() {
    var maxVal = this.value[0];
    if (this.value.length < 2) {
      return this.value.pop();
    }
    this.value[0] = this.value.pop();
    this.sinkDown(0);
    return maxVal;
  }
  swap(a, b) {
    var temp = this.value[a];
    this.value[a] = this.value[b];
    this.value[b] = temp;
  }
  sinkDown(index) {
    var sorted = false;
    var child1;
    var child2;
    var endIndex = this.value.length - 1;
    while (!sorted) {
      child1 = 2 * index + 1;
      child2 = 2 * index + 2;
      if (
        (this.value[child1] <= this.value[index] || child1 > endIndex) &&
        (this.value[child2] <= this.value[index] || child2 > endIndex)
      ) {
        sorted = true;
        return;
      }
      if (this.value[child1] >= this.value[child2] || child2 > endIndex) {
        this.swap(index, child1);
        index = child1;
      } else {
        this.swap(index, child2);
        index = child2;
      }
    }
  }
}

var MBH = new MaxBinaryHeap();

MBH.insert(88);
MBH.insert(51);
MBH.insert(45);
MBH.insert(36);
MBH.insert(25);
MBH.insert(1);
MBH.insert(4);
MBH.insert(5);
MBH.insert(7);

MBH.insert(24);
console.log(MBH.extractMax());
console.log(MBH.extractMax());
console.log(MBH.value);
