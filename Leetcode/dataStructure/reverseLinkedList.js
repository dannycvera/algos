var reverseList = function (head) {
  console.log(head.val);
  let prevNode = null;
  let node = head.val;
  let nextNode = head.next;
  while (node.next !== null) {
    node.next = prevNode;
    prevNode = node;
    node = nextNode;
    nextNode = node.next;
  }

  return head;
};
let head = [1, 2, 3, 4, 5];
