var reverseList = function (head) {
  function helper(nodeA, nodeB) {
    if (!nodeB) {
      return nodeA;
    }
    let nodeC = nodeB.next;
    nodeB.next = nodeA;
    return helper(nodeB, nodeC);
  }
  return helper(null, head);
};

// null -> 1 -> 2 -> 3 -> 4 -> 5

// a
//         b
//
// Set two variables
//One for current, another for next
//then use a while loop

// move forward thru list by setting current to current.next and next.next
//
