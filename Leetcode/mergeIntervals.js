var merge = function (intervals) {
  if (!intervals.length) {
    return intervals;
  }
  // if not sorted run a sort here
  intervals.sort((a, b) => a[0] - b[0]);
  let start = intervals[0][0];
  let end = intervals[0][1];
  let currentStart;
  let currentEnd;
  const results = [];
  for (let i = 1; i < intervals.length; i++) {
    currentStart = intervals[i][0];
    currentEnd = intervals[i][1];
    if (end >= currentStart) {
      start = Math.min(currentStart, start);
      end = Math.max(currentEnd, end);
    } else {
      results.push([start, end]);
      start = currentStart;
      end = currentEnd;
    }
  }
  results.push([start, end]);
  return results;
};
