/**
 * @param {number[][]} costs
 * @return {number}
 */

//[[10,20],[30,200],[400,50],[30,20]]

var twoCitySchedCostSimple = function (costs) {
  // sort without Math.abs
  // then half will be negative and the other half positive
  // or at the very least after sorting the first half will balance out the second half
  // then apply the first half to city a and the second half to city b
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  let sum = 0;
  let n = costs.length / 2;
  for (let i = 0; i < n; i++) {
    sum += costs[i][0] + costs[i + n][1];
  }
  return sum;
};

var twoCitySchedCost = function (costs) {
  costs.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]));
  // console.log(costs);
  let sum = 0;
  let cityA = 0;
  let cityB = 0;
  for (let i = 0; i < costs.length; i++) {
    if (Math.abs(cityA - cityB) < costs.length - 1 - i) {
      // sum += Math.min(costs[i][0], costs[i][1]);
      if (costs[i][0] < costs[i][1]) {
        cityA++;
        sum += costs[i][0];
      } else if (costs[i][0] > costs[i][1]) {
        cityB++;
        sum += costs[i][1];
      } else {
        if (cityA < cityB) {
          cityA++;
          sum += costs[i][0];
        } else {
          cityB++;
          sum += costs[i][1];
        }
      }
    } else {
      if (cityA < cityB) {
        cityA++;
        sum += costs[i][0];
      } else {
        cityB++;
        sum += costs[i][1];
      }
    }
  }
  // console.log(cityA, cityB);
  return sum;
};
