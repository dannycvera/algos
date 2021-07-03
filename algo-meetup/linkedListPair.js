var reverseList = function (head) {
  let prevNode = null;
  let node = head;
  let nextNode;
  while (node !== null) {
    nextNode = node.next;
    node.next = prevNode;
    prevNode = node;
    node = nextNode;
  }

  return prevNode;
};
var isPalindrome = function (head) {
  const queue = [];
  let node = head;
  while (node) {
    queue.push(node.val);
    node = node.next;
  }

  let j = queue.length - 1;

  for (let i = 0; i < j; i++) {
    if (queue[i] !== queue[j]) {
      return false;
    }
    j--;
  }
  return true;
};
