var merge = function (nums1, m, nums2, n) {
  m--;
  n--;
  let i = nums1.length - 1;
  while (i >= 0) {
    if (n < 0) {
      break;
    }
    if (n < 0 || nums1[m] > nums2[n]) {
      nums1[i] = nums1[m];
      m--;
    } else {
      nums1[i] = nums2[n];
      n--;
    }
    i--;
  }
  return nums1;
};
//  e
// [1,2,2,3,5,6]
//  i
//
// [2,5,6]
// j
