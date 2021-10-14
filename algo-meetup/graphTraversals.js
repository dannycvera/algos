class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this.size;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;

    this.size--;
    return temp.value;
  }

  getSize() {
    return this.size;
  }
}

// Function signature:
function bfs(vertex, graph) {
  const results = [];
  // Initialize a set for tracking visited vertices
  const visited = new Set();
  // Initialize a queue for tracking traversal
  const q = new Queue();
  // Add the start vertex to visited
  visited.add(vertex);
  // Enqueue the start vertex to the queue
  q.enqueue(vertex);
  // While the queue is not empty
  let current;
  while (q.getSize() > 0) {
    //   Dequeue a vertex
    current = q.dequeue();
    results.push(current);
    // For each neighbor of the vertex
    // for (let i = 0; i < graph.list[current].length; i++){
    for (const neighbor of graph[current]) {
      // If neighbor has not been visited
      if (!visited.has(neighbor)) {
        //  Add neighbor to visited
        visited.add(neighbor);
        //  Enqueue neighbor
        q.enqueue(neighbor);
      }
    }
  }
  return results;
}

// Use an array instead of a queue in JavaScript since there’s no built-in queue class.

// push -> enqueue
// shift -> dequeue

// Pseudocode:

//     If neighbor has not been visited
//       Add neighbor to visited
//       Enqueue neighbor

//Test Data:
// from slide
// const graph = {
//   0: [1, 3, 6],
//   1: [4, 5],
//   2: [5, 7],
//   3: [0, 5],
//   4: [1, 6],
//   5: [1, 2, 3],
//   6: [0, 4],
//   7: [2],
// };

// // console.log(bfs(3, graph));
// const graph2 = {
//   0: [1, 2, 3],
//   1: [0, 2],
//   2: [0, 4],
//   3: [0],
//   4: [2],
// };

// Function signature:
function dfs(vertex, graph, visited = new Set()) {
  // Initialize a set for tracking visited vertices
  // Add the current vertex to the set
  visited.add(vertex);
  console.log(vertex);
  // For each neighbor of the vertex
  for (const neighbor of graph[vertex]) {
    //   If neighbor has not been visited

    if (!visited.has(neighbor)) {
      //     Make recursive call with neighbor
      dfs(neighbor, graph, visited);
    }
  }
}

// Function signature:
function dfsIterative(vertex, graph, visited = new Set()) {
  // Initialize a set for tracking visited vertices
  // Initialize a stack for tracking traversal
  const s = [];
  // Add the start vertex to visited
  visited.add(vertex);

  // Push the the start vertex to the stack
  s.push(vertex);
  // While the stack is not empty
  while (s.at(-1)) {
    //   Pop  a vertex from the stack
    const current = s.pop();
    console.log(current);
    //   For each neighbor of the vertex
    for (const neighbor of graph[current]) {
      //     If neighbor has not been visited
      if (!visited.has(neighbor)) {
        //       Add neighbor to visited
        visited.add(neighbor);
        //       Push neighbor to the stack
        s.push(neighbor);
      }
    }
  }
}

// Pseudocode:

// Test Data:
const graph = {
  0: [1, 3, 6],
  1: [4, 5],
  2: [5, 7],
  3: [0, 5],
  4: [1, 6],
  5: [1, 2, 3],
  6: [0, 4],
  7: [2],
};

// console.log(dfs(0, graph));
console.log(dfsIterative(0, graph));

const graph2 = {
  0: [1, 2, 3],
  1: [0, 2],
  2: [0, 4],
  3: [0],
  4: [2],
};
