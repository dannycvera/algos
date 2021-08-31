class AdjacencyList {
  constructor() {
    this.list = {}; // { v1: [], v2:[]}
  }
  addVertex(v) {
    if (!this.hasOwnProperty(v)) {
      this.list[v] = [];
    }
  }
  addEdge(v1, v2) {
    if (
      this.list.hasOwnProperty(v1) &&
      this.list.hasOwnProperty(v2) &&
      v1 !== v2
    ) {
      this.list[v1].push(v2);
      this.list[v2].push(v1);
    }
  }
  removeEdge(v1, v2) {
    if (
      this.list.hasOwnProperty(v1) &&
      this.list.hasOwnProperty(v2) &&
      v1 !== v2
    ) {
      this.list[v1] = this.list[v1].filter((elem) => {
        elem !== v2;
      });
      this.list[v2] = this.list[v2].filter((elem) => {
        elem !== v1;
      });
    }
  }
  removeVertex(v) {
    if (this.list.hasOwnProperty(v)) {
      let current;
      while (this.list[v].length) {
        current = this.list[v].pop();
        this.removeEdge(current, v);
      }
      delete this.list[v];
    }
  }
}

const graph = new AdjacencyList();
graph.addVertex(5);
graph.addVertex(3);
graph.addVertex(2);
graph.addVertex(1);
graph.addEdge(1, 3);
graph.addEdge(3, 2);
graph.addEdge(5, 2);
// graph.removeEdge(2, 3);
graph.removeVertex(2);
graph.removeVertex(3);
graph.removeVertex(5);
graph.removeVertex(5);
