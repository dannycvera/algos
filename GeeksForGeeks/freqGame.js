// right answer
const largeButMinFreq = (arr) => {
  const freqMap = {}; // {2:2, 1:2, 5:3, 50:3}
  let n = arr.length;
  let max = -1; //= [arr[0]]; // use a q [2,]
  let minFreq = -1; // = 1;

  let current;
  let curFreq;

  for (let i = 0; i < n; i++) {
    current = arr[i];
    if (freqMap.hasOwnProperty(current)) {
      freqMap[current] += 1;
      // loop over maxQ and check if the value is and freq of each before.
      // if length of 1, increase minFreq
    } else {
      freqMap[current] = 1;
      // if (current > max || minFreq > 1) {
      //   maxQ.push(current);
      //   minFreq = 1;
      // }
    }
  }
  for (let el in freqMap) {
    curFreq = freqMap[el];
    if ((el > max && curFreq === minFreq) || curFreq < minFreq || max === -1) {
      max = el;
      minFreq = curFreq;
    }
  }
  return max;
};

// wrong answer
const largeButMinFreq = (arr, n) => {
  const freqMap = {}; // {2:2, 1:2, 5:3, 50:3}
  let n = arr.length;
  let max = -Infinity; //= [arr[0]]; // use a q [2,]
  let minFreq = Infinity; // = 1;

  let current;

  for (let i = 0; i < n; i++) {
    current = arr[i];
    if (freqMap.hasOwnProperty(current)) {
      freqMap[current] += 1;
      // loop over maxQ and check if the value is and freq of each before.
      // if length of 1, increase minFreq
    } else {
      freqMap[current] = 1;
      // if (current > max || minFreq > 1) {
      //   maxQ.push(current);
      //   minFreq = 1;
      // }
    }
    minFreq = Math.min(minFreq, freqMap[current]);
    if (minFreq === freqMap[current]) {
      max = Math.max(max, current);
    }
  }
  return max;
};
console.log(largeButMinFreq([2, 2, 1, 1, 5, 5, 50, 50, 50, 5]));
console.log(largeButMinFreq([1, 2, 2]));
/*
      
      
      
stack [2]
[2, 1, 5, 5, 50, 50, 50, 5, 2]
                            i
                    {2:2, 1:2, 5:3, 50:3}
                                      i


                      [2, 2, 1]
                      { 2:2, 1:1}
                             i

                             recursive
                             2
                            2 1 
*/
