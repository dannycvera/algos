var lengthOfLongestSubstring = function (s) {
  const freqMap = {};
  let l = 0;
  let r = 0;
  let maxSize = 0;

  while (r < s.length) {
    if (freqMap[s[r]] >= l) {
      l = freqMap[s[r]] + 1;
      freqMap[s[r]] = r;
      r++;
    } else {
      freqMap[s[r]] = r;
      maxSize = Math.max(maxSize, r - l + 1);
      r++;
    }
  }
  return maxSize;
};
