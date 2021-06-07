var insert = function (intervals, newInterval) {
  const results = [];
  let currentFirst;
  let currentLast;
  let inserted = false;
  for (let i = 0; i < intervals.length; i++) {
    currentFirst = intervals[i][0];
    currentLast = intervals[i][1];

    if (inserted || currentLast < newInterval[0]) {
      //inserts everything before or after the newInterval as long as they dont overlap
      results.push(intervals[i]);
    } else if (newInterval[1] < currentFirst) {
      // if the newInterval is before the current interval, but not overlapping. Insert both in order.
      // set inserted to true
      results.push(newInterval);
      results.push(intervals[i]);
      inserted = true;
    } else {
      // otherwise there is a conflict and merge the conflict with Math.min and max
      newInterval[0] = Math.min(currentFirst, newInterval[0]);
      newInterval[1] = Math.max(currentLast, newInterval[1]);
    }
  }
  //if the newInterval is still not inserted them push it now.
  if (!inserted) {
    results.push(newInterval);
  }
  return results;
};

intervals = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];
newInterval = [4, 8];
console.log(insert(intervals, newInterval));

var lengthOfLongestSubstring = function (s) {
  const freq = {};
  let currLetter;
  let left = 0;
  let right = 0;
  let len = 0;
  let currLen = 0;
  let duplicates = 0;

  while (s.length > right) {
    if (duplicates > 0) {
      currLetter = s[left];
      currLen--;
      if (freq[currLetter]) {
        freq[currLetter] -= 1;
        if (freq[currLetter] >= 1) {
          duplicates--;
        }
      } else {
        freq[currLetter] = 1;
      }
      left++;
    } else {
      currLetter = s[right];
      currLen++;
      if (freq[currLetter]) {
        freq[currLetter] += 1;
        if (freq[currLetter] > 1) {
          duplicates++;
        }
      } else {
        freq[currLetter] = 1;
      }
      right++;
      if (len < currLen && duplicates === 0) {
        len = currLen;
      }
    }
  }
  return len;
};
s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));

var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;
  let currentLength = 0;
  let longestLength = 0;
  let flips = []; // Push the index of k flips. Check the length against k
  while (right < nums.length) {
    if (flips.length < k || nums[right] === 1) {
      if (nums[right] === 0) {
        flips.push(right);
      }
      currentLength++;
      longestLength = Math.max(currentLength, longestLength);
      right++;
    } else {
      if (flips[0] != left) {
        currentLength -= flips[0] - left;
        left = flips[0];
      }
      currentLength--;
      left++;
      flips.shift();
    }
  }
  // code without an array to store the index of each K flip
  //
  // let counter = 0;
  // while (right < nums.length) {
  //   if (counter < k || nums[right] === 1) {
  //     if (nums[right] === 0) {
  //       counter++;
  //     }
  //     currentLength++;
  //     longestLength = Math.max(currentLength, longestLength);
  //     right++;
  //   } else {
  //     if (nums[left] === 0) {
  //       counter--;
  //     }
  //     currentLength--;
  //     left++;
  //   }
  // }
  return longestLength;
};

nums = [0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
k = 3;
console.log(longestOnes(nums, k));
