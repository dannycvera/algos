// adjacency matrix
// sometimes used with nested arrays
//
// adjacency list with numeric nodes
// an array of arrays.
// The first array index will correspond to the nodes
// the sub-arrays contain the connections
// hashtables can be used for non numeric nodes
// { a:[b,f], b:[a,c], c:[b,d], d:[c,e]}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = {};
    } else {
      return "already exists. Nothing done";
    }
  }
  addEdge(vertex1, vertex2, weight = 1) {
    if (
      this.adjacencyList[vertex1] &&
      this.adjacencyList[vertex2] &&
      vertex1 !== vertex2
    ) {
      this.adjacencyList[vertex1][vertex2] = weight;
      this.adjacencyList[vertex2][vertex1] = weight;
    }
  }
  removeEdge(vertex1, vertex2) {
    delete this.adjacencyList[vertex1][vertex2];
    delete this.adjacencyList[vertex2][vertex1];
  }
  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      for (var adjacentVertex in this.adjacencyList[vertex]) {
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
  }
  dfs(vertex) {
    const results = [];
    const visited = {};

    const dfsHelper = (vertex) => {
      // if (!vertex) {
      //   return;
      // }
      results.push(vertex);
      visited[vertex] = true;
      // console.log(this.adjacencyList[vertex], "this");
      for (let neighbor in this.adjacencyList[vertex]) {
        // console.log(results, adjVtx);
        // console.log(!visited[adjVtx]);
        if (!visited[neighbor]) {
          dfsHelper(neighbor);
        }
      }
    };
    dfsHelper(vertex);
    return results;
  }

  dfsIterative(start) {
    const s = [start];
    const visited = {};
    const results = [];
    let vertex;
    while (s.length) {
      vertex = s.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        results.push(vertex);
        // left side first DFS search
        // let adjacent = Object.keys(this.adjacencyList[vertex]);
        // let n = adjacent.length - 1;
        // while (n >= 0) {
        //   s.push(adjacent[n]);
        //   n--;
        // }

        // right side first DFS search
        for (let neighbor in this.adjacencyList[vertex]) {
          if (!visited[neighbor]) {
            s.push(neighbor);
          }
        }
      }
    }
    return results;
  }
  bfs(start) {
    const q = [start];
    const visited = {};
    const results = [];
    let vertex;
    while (q.length) {
      vertex = q.shift();
      if (!visited[vertex]) {
        visited[vertex] = true;
        results.push(vertex);
        for (let neighbor in this.adjacencyList[vertex]) {
          if (!visited[neighbor]) {
            q.push(neighbor);
          }
        }
      }
    }
    return results;
  }
  // not working
  path(start, end) {
    // setup three objects
    const results = [];
    const distances = {};
    const previous = {};
    const nodes = new PriorityQueue();
    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[start] = 0;
        nodes.enqueue(start, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    //loop thru priority queue
    let smallest;
    // while there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().node;
      if (smallest === end) {
        // console.log(distances);
        // console.log(previous);
        // build path results array to return
        while (smallest) {
          results.push(smallest);
          smallest = previous[smallest];
        }
        return results.reverse();
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let weight = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + weight;
          if (candidate < distances[neighbor]) {
            // updating new smallest distance to neighbor
            distances[neighbor] = candidate;
            // updating previous - how we got to next neighbor
            previous[neighbor] = smallest;
            //enqueue in priority quueue with new priority
            nodes.enqueue(neighbor, candidate);
          }
        }
      }
    }
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(node, priority) {
    this.values.push({ node, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

var graph = new Graph();
graph.addVertex("a");
graph.addVertex("b");
graph.addVertex("c");
graph.addVertex("d");
graph.addVertex("e");
graph.addVertex("f");
// graph.addEdge("a", "b", 5);
// graph.addEdge("a", "c", 10);
// graph.addEdge("b", "d", 3);
// graph.addEdge("c", "e", 2);
// graph.addEdge("d", "e", 8);
// graph.addEdge("d", "f", 10);
// graph.addEdge("e", "f", 5);

//     a
//    / \
//   b   c
//   |   |
//   d - e
//    \ /
//     f

graph.addEdge("a", "b", 4);
graph.addEdge("a", "c", 2);
graph.addEdge("b", "e", 3);
graph.addEdge("c", "d", 2);
graph.addEdge("c", "f", 4);
graph.addEdge("d", "e", 3);
graph.addEdge("d", "f", 1);
graph.addEdge("e", "f", 1);
//      a
//    2/ \4
//    c   b
//   /\2   \
// 4/  d    |3
//  \ 1/\3 /
//   f---e
//     1
graph.dfsIterative("a");
