// var middleNode = function (head) {
//   let middle = head;
//   let current = head;
//   let count = 0;
//   while (current !== null) {
//     if (count % 2 === 1) {
//       middle = middle.next;
//     }
//     count++;
//     current = current.next;
//   }
//   return middle;
// };

var middleNode = function (head) {
  let slowP = head;
  let fastP = head;
  while (fastP && fastP.next) {
    slowP = slowP.next;
    fastP = fastP.next.next;
  }
  return slowP;
};
