class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.min = null;
  }
}

var MinStack = function () {
  this.first = null;
  this.last = null;
  this.size = 0;
};

/**
 * @param {number} val
 * @return {void}
 */

MinStack.prototype.push = function (val) {
  let node = new Node(val);
  if (this.first === null) {
    node.min = node;
    this.first = node;
    this.last = node;
  } else {
    node.next = this.first;
    if (this.first.min.val > node.val) {
      node.min = node;
    } else {
      node.min = this.first.min;
    }
    this.first = node;
  }
  this.size++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.first === null) {
    return null;
  }
  let node = this.first;
  this.first = node.next;
  node.next = null;
  node.min = null;
  this.size--;
  return node;
};
/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.first === null) {
    return null;
  }
  return this.first.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.first === null) {
    return null;
  }
  return this.first.min.val;
};
