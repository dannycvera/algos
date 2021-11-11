// var averageOfLevels = function(root) {
//     if(!root){
//         return [];
//     }
//     // const q = [root];
//     const q = new Queue();
//     q.enqueue(root);
//     const result = [];
//     let current;
//     let sum = 0;
//     let qLen;
//     while(q.size() > 0){
//         qLen = q.size();
//         for (let i = 0; i < qLen; i++){
//             current = q.dequeue();
//             sum = sum + current.val
//             if(current.left){
//                 q.enqueue(current.left);
//             }
//             if(current.right){
//                 q.enqueue(current.right);
//             }
//         }
//         result.push(sum / qLen);
//         sum = 0;
//     }
//     return result;
// };

var averageOfLevels = function (root) {
  if (!root) {
    return 0;
  }
  const q = new Queue();
  q.enqueue(root);
  q.enqueue(null); // null signifies the end of a level of parents
  let current;
  let sum = 0;
  let count = 0;
  const results = [];
  while (q.size() > 1) {
    // null will always be in the queue
    current = q.dequeue();
    if (current === null) {
      q.enqueue(null); //siginifies the last child was previously added on a level.
      results.push(sum / count);
      sum = 0;
      count = 0;
    } else {
      if (current.left) {
        q.enqueue(current.left);
      }
      if (current.right) {
        q.enqueue(current.right);
      }
      sum += current.val;
      count++;
    }
  }
  results.push(sum / count);
  return results;
};
