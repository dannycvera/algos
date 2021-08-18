var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const q = [root, "end"];
  const results = [[]];
  let current;
  let i = 0;
  while (q.length > 1) {
    current = q.shift();
    if (current === "end") {
      q.push("end");
      results.push([]);
      i++;
      continue;
    } else {
      results[i].push(current.val);
    }
    if (current.left) {
      q.push(current.left);
    }
    if (current.right) {
      q.push(current.right);
    }
  }
  return results;
};
