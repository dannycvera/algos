const visited = {};

var copyRandomList = function (head) {
  if (head == null) {
    return null;
  }
  console.log("head.random", head.random === null);
  if (head in visited) {
    return visited[head];
  }

  node = new Node(head.val, null, null);

  visited[head] = node;
  console.log(visited, head in visited);
  node.next = copyRandomList(head.next);
  node.random = copyRandomList(head.random);

  return node;
};
