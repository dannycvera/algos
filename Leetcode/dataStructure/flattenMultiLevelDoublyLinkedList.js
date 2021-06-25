var flatten = function (head) {
  if (head === null) {
    return head;
  }
  const stack = [head];
  let current;
  let stackNext;
  while (stack.length > 0) {
    current = stack.pop();
    if (current.next !== null) {
      stack.push(current.next);
    }
    if (current.child !== null) {
      stack.push(current.child);
      current.next = current.child;
      current.child.prev = current;
      current.child = null;
    } else if (current.next === null && stack.length > 0) {
      stackNext = stack.length - 1;
      stack[stackNext].prev = current;
      current.next = stack[stackNext];
    }
  }
  return head;
};
