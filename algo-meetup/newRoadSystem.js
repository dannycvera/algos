function newRoadSystem(roadRegister) {
  const nodeList = new Array(roadRegister.length);
  nodeList.fill(0);

  for (let y = 0; y < roadRegister.length; y++) {
    for (let x = 0; x < roadRegister.length; x++) {
      if (roadRegister[y][x]) {
        nodeList[x] += 1;
        nodeList[y] -= 1;
      }
    }
  }
  let result = nodeList.filter((el) => el !== 0);
  return result.length === 0;
}

let roadRegister = [
  [false, true, false, false],
  [false, false, true, false],
  [true, false, false, true],
  [false, false, true, false],
];

// console.log(newRoadSystem(roadRegister));

function roadsBuilding(cities, roads) {
  // let tempArr = [];
  const missing = [];

  roads.sort((a, b) => {
    if (a[0] > a[1]) {
      temp = a[0];
      a[0] = a[1];
      a[1] = temp;
    }
    if (b[0] > b[1]) {
      temp = b[0];
      b[0] = b[1];
      b[1] = temp;
    }
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    } else if (a[1] < b[1]) {
      return -1;
    } else if (a[1] > b[1]) {
      return 1;
    }
  });

  let r = 0;
  for (let c = 0; c < cities - 1; c++) {
    for (let c2 = c + 1; c2 < cities; c2++) {
      if (roads[r] && roads[r][0] === c && roads[r][1] === c2) {
        r++;
      } else {
        missing.push([c, c2]);
      }
    }
  }
  return missing;
}

// const roadsBuilding1 = (c, r) => {
//   //How come the magician's bullshit crystal can transmit
//   // roads that aren't lexographically sorted?
//   r = r
//     .map((e) => Math.min(e[0], e[1]) * c + Math.max(e[0], e[1]))
//     .sort((a, b) => a - b);

//   var ri = 0,
//     out = [];

//   for (var i = 0; i < c - 1; ++i)
//     for (var j = i + 1; j < c; ++j) {
//       if (r[ri] == i * c + j) ++ri;
//       else out.push([i, j]);
//     }

//   return out;
// };

let cities = 7;
let roads = [
  [5, 3],
  [4, 0],
  [0, 1],
  [6, 5],
  [3, 4],
  [0, 3],
  [2, 0],
  [2, 1],
  [2, 6],
  [5, 1],
  [3, 2],
  [0, 5],
  [1, 3],
  [1, 4],
  [6, 3],
];

console.log(roadsBuilding(cities, roads));
console.log("finish");
