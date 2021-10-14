// var hasCycle = function (head) {
//   let node = head;
//   let nodeMap = new Map();
//   while (node !== null) {
//     if (nodeMap.has(node)) {
//       return true;
//     }
//     nodeMap.set(node, true);
//     node = node.next;
//   }
//   return false;
// };

var hasCycle = function (head) {
  let slowP = head;
  let fastP = head;
  while (fastP && fastP.next) {
    slowP = slowP.next;
    fastP = fastP.next.next;
    if (slowP === fastP) {
      return true;
    }
  }
  return false;
};
