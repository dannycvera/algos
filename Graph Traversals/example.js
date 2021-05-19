// function BSFGraph(vertex, graph, visited = new Set()) {
//   visited.push(vertex);
//   const ourQueue = [vertex];
//   let current
//   const searchTheNodes = graph[vertex] => {

//     graph[vertex].forEach(neighbor => {
//       if (!visited.has(neighbor)) {
//         ourQueue.push(neighbor);
//         visited.push(neighbor);
//       }
//     })
//   }
// }

// Breadth first search
function bfs(start, graph) {
  const visited = new Set();
  const q = [];

  visited.add(start);
  while (q.length !== 0) {
    const vertex = q.shift();
    console.log(vertex);
    const neighbors = graph[vertex];

    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        q.push(neighbor);
      }
    }
  }
  console.log(visited);
}

const visited = {
  0: true,
  1: false,
};

// const graph2 = {
//   0: [1, 3, 6],
//   1: [4, 5],
//   2: [5, 7],
//   3: [0, 5],
//   4: [1, 6],
//   5: [1, 2, 3],
//   6: [0, 4],
//   7: [2],
// };

// Depth first search
// use a recursive call with neighbor
Function signature: 
function(vertex, graph, visited = new Set()) {

}

Use an array instead of a queue in JavaScript since there’s no built-in queue class.
push -> enqueue
shift -> dequeue

Pseudocode:
// Initialize a set for tracking visited vertices
// Initialize a queue for tracking traversal
// Add the start vertex to visited
// Enqueue the start vertex to the queue
// While the queue is not empty
//   Dequeue a vertex
//   For each neighbor of the vertex
//     If neighbor has not been visited
//       Add neighbor to visited
//       Enqueue neighbor

//Test Data:
// from slide
const graph = { 
  0: [1, 3, 6],
  1: [4, 5],
  2: [5, 7],
  3: [0, 5],
  4: [1, 6],
  5: [1, 2, 3],
  6: [0, 4],
  7: [2]
}

const graph2 = {
  0: [1, 2, 3],
  1: [0, 2],
  2: [0, 4],
  3: [0],
  4: [2]
}


const recursiveSearch = () => {

}

function dfs(vertex, graph, visited = new Set()) {
// Initialize a set for tracking visited vertices
// Initialize a queue for tracking traversal

// Add the start vertex to visited
visited.add(vertex);
console.log(vertex);
// Enqueue the start vertex to the queue

const neighbors = graph[vertex];

// While the queue is not empty
for (let neighbor of neighbors) {
  if (!visited.has(neighbors)) {
    dfs(neighbor, graph, visited);
  }
}
//   Dequeue a vertex
//   For each neighbor of the vertex
//     If neighbor has not been visited
//       Add neighbor to visited
//       Enqueue neighbor







  // let neighbor = graph[vertex].forEach(neighbor => {
  //   if (visited.has(neighbor)) {
  //     dfs(neighbor, graph, visited)

  //   }
  // });
}



dfs(0, graph);

