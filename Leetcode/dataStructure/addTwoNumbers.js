var addTwoNumbers = function (l1, l2) {
  let prevHead = new ListNode(-1);
  let prev = prevHead;
  let sum = 0;
  let nodeL1 = l1;
  let nodeL2 = l2;
  while (nodeL1 || nodeL2 || sum === 1) {
    if (nodeL1 || nodeL2) {
      if (!nodeL2) {
        sum += nodeL1.val;
        nodeL1 = nodeL1.next;
      } else if (!nodeL1) {
        sum += nodeL2.val;
        nodeL2 = nodeL2.next;
      } else {
        sum += nodeL1.val + nodeL2.val;
        nodeL1 = nodeL1.next;
        nodeL2 = nodeL2.next;
      }
    }
    prev.next = new ListNode(sum % 10);
    prev = prev.next;
    sum = sum >= 10 ? 1 : 0;
  }
  return prevHead.next;
};
