var oddEvenJumps = function (arr) {
  let count = 0;
  const validJump = new Set();

  //     const oddSort = [];
  //     for(let i = 0; i < arr.length; i++){
  //         oddSort.push([arr[i], i]);
  //     }
  //     oddSort.sort((a,b) => a[0] - b[0]);

  //     const evenSort = [];
  //     for(let i = 0; i < arr.length; i++){
  //         evenSort.push([arr[i], i]);

  //     }
  //     evenSort.sort((a,b) => b[0] - a[0]);

  const evenMap = new Array(arr.length - 2).fill(null);
  const oddMap = new Array(arr.length - 2).fill(null);

  const dfs = (idx, jump) => {
    let currentSet = `${idx},${jump % 2 === 0 ? "even" : "odd"}`;
    if (idx == arr.length - 1 || validJump.has(currentSet)) {
      count++;
      return true;
    }

    if (jump % 2 === 0) {
      // even-numbered jumps (i.e., jumps 2, 4, 6, ...),
      // you jump to the index j such that arr[i] >= arr[j] and arr[j] is the largest possible value.
      // If there are multiple such indices j, you can only jump to the smallest such index j.

      let max = 0;

      // let jumpIdx = evenMap[idx];
      // if(jumpIdx === null){
      for (let j = idx + 1; j < arr.length; j++) {
        if (arr[idx] >= arr[j]) {
          if (arr[max] < arr[j]) {
            max = j;
          }
        }
      }
      // } else {
      //     max = jumpIdx;
      // }

      if (max > 0) {
        evenMap[idx] = max;
        let valid = dfs(max, jump + 1);
        if (valid) {
          validJump.add(currentSet);
          return true;
        }
      }
    } else {
      // odd-numbered jumps (i.e., jumps 1, 3, 5, ...),
      // you jump to the index j such that arr[i] <= arr[j] and arr[j]
      // is the smallest possible value. If there are multiple such indices j,
      // you can only jump to the smallest such index j.
      let min = 0;
      // let jumpIdx = oddMap[idx];
      // if(jumpIdx === null){
      for (let j = idx + 1; j < arr.length; j++) {
        if (arr[idx] <= arr[j]) {
          if (arr[min] > arr[j]) {
            min = j;
          }
        }
      }
      // } else {
      //     min = jumpIdx
      // }

      if (min > 0) {
        oddMap[idx] = min;
        let valid = dfs(min, jump + 1);
        if (valid) {
          validJump.add(currentSet);
          return true;
        }
      }
    }
    return false;
  };
  for (let i = 0; i < arr.length; i++) {
    dfs(i, 1);
  }

  return count;
};
