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
  ///////////////////////////////////////////////////////////////////////
  //
  // Dijkstra's Algorithm for finding the shortest distance between nodes below:
  //
  ////////////////////////////////////////////////////////////////////////
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
    let smallestQ;
    // while there is something to visit
    while (nodes.values.length) {
      smallestQ = nodes.dequeue().val;
      if (smallestQ === end) {
        // console.log(distances);
        // console.log(previous);
        // build path results array to return
        while (smallestQ) {
          results.push(smallestQ);
          smallestQ = previous[smallestQ];
        }
        return results.reverse();
      }
      if (smallestQ || distances[smallestQ] !== Infinity) {
        // dont think i need this. could be an "else"
        for (let neighbor in this.adjacencyList[smallestQ]) {
          //find neighboring node
          let weight = this.adjacencyList[smallestQ][neighbor]; // getting weight/edge distance  from adjacency list
          // calculate new distance to neighboring node
          let candidate = distances[smallestQ] + weight;
          if (candidate < distances[neighbor]) {
            // updating new smallestQ distance to neighbor
            distances[neighbor] = candidate;
            // updating previous - how we got to next neighbor
            previous[neighbor] = smallestQ;
            //enqueue in priority quueue with new priority
            nodes.enqueue(neighbor, candidate);
          }
        }
      }
    }
  }
}

// simple priority queue
// class PriorityQueue {
//   constructor() {
//     this.values = [];
//   }
//   enqueue(val, priority) {
//     this.values.push({ val, priority });
//     this.sort();
//   }
//   dequeue() {
//     return this.values.shift();
//   }
//   sort() {
//     this.values.sort((a, b) => a.priority - b.priority);
//   }
// }

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  // minBinaryHeap
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    var node = new Node(val, priority);

    this.values.push(node);
    if (this.values.length < 2) {
      return this.values;
    }
    return this.bubble();
  }
  bubble(i = this.values.length - 1) {
    var parent;
    var sorted = false;
    while (!sorted && i > 0) {
      parent = Math.floor((i - 1) / 2);
      if (this.values[parent].priority > this.values[i].priority) {
        this.swap(parent, i);
        i = parent;
      } else {
        sorted = true;
      }
    }
    return this.values;
  }
  dequeue() {
    var minPriority = this.values[0];
    if (this.values.length < 2) {
      return this.values.pop();
    }
    this.values[0] = this.values.pop();
    this.sink(0);
    return minPriority;
  }
  sink(i = 0) {
    var child1;
    var child2;
    var length = this.values.length;
    while (i < length) {
      child1 = 2 * i + 1;
      child2 = 2 * i + 2;
      if (
        (child1 >= length ||
          this.values[child1].priority > this.values[i].priority) &&
        (child2 >= length ||
          this.values[child2].priority > this.values[i].priority)
      ) {
        return;
      }

      if (
        child2 >= length ||
        this.values[child1].priority < this.values[child2].priority
      ) {
        this.swap(i, child1);
        i = child1;
      } else {
        this.swap(i, child2);
        i = child2;
      }
    }
  }
  swap(a, b) {
    var temp = this.values[a];
    this.values[a] = this.values[b];
    this.values[b] = temp;
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

graph.path("a", "e");
graph.dfsIterative("a");
