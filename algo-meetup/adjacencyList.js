class AdjacencyList {
  constructor() {
    this.list = {}; // {0:[], 1:[3], 2:[], 3:[1,4], 4:[3], vertex1:[vertex2, vertex3]}
  }
  addVertex(v) {
    if (!this.list.hasOwnProperty(v)) {
      this.list[v] = [];
    }
    return;
  }
  addEdge(v1, v2) {
    if (this.list.hasOwnProperty(v1) && this.list.hasOwnProperty(v2)) {
      this.list[v1].push(v2);
      this.list[v2].push(v1);
    }
    return;
  }
  removeVertex(v) {
    // v = 3
    // work off end of array and pop off when visited
    if (!this.list.hasOwnProperty(v)) return;
    let neighbor;
    while (this.list[v].length > 0) {
      neighbor = this.list[v].pop();
      this.list[neighbor] = this.list[neighbor].filter((el) => el !== v);
    }
    delete this.list[v];
    return;
  }
  removeEdge(v1, v2) {
    if (!this.list.hasOwnProperty(v1) || !this.list.hasOwnProperty(v2)) return;

    this.list[v1] = this.list[v1].filter((el) => el !== v2);
    this.list[v2] = this.list[v2].filter((el) => el !== v1);

    return;
  }
}

// Example calls
const myGraph = new AdjacencyList();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");

myGraph.addEdge("7", "8");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.addVertex("1");

myGraph.removeVertex("7");
myGraph.removeEdge("7", "8");
myGraph.removeVertex("3");
myGraph.removeEdge("4", "2");
console.log(myGraph.list);

// 0 --> 1 2
// 1 --> 3 2 0
// 2 --> 4 1 0
// 3 --> 1 4
// 4 --> 3 2 5
// 5 --> 4 6
// 6 --> 5
