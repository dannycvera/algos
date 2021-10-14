var isPalindrome = function (head) {
  let middle = middleNode(head);
  let halfReverse = reverseList(middle);
  let nodeFirstHalf = head;
  let nodeSecondHalf = halfReverse;

  while (nodeFirstHalf && nodeSecondHalf) {
    if (nodeFirstHalf.val !== nodeSecondHalf.val) {
      return false;
    }
    nodeFirstHalf = nodeFirstHalf.next;
    nodeSecondHalf = nodeSecondHalf.next;
  }
  reverseList(halfReverse);
  return true;
};

var reverseList = function (head) {
  function helper(prev, current) {
    if (!current) {
      return prev;
    }
    let next = current.next;
    current.next = prev;
    return helper(current, next);
  }
  return helper(null, head);
};

var middleNode = function (head) {
  let middle = head;
  let current = head;
  let count = 0;
  while (current !== null) {
    if (count % 2 === 1) {
      middle = middle.next;
    }
    count++;
    current = current.next;
  }
  return middle;
};
