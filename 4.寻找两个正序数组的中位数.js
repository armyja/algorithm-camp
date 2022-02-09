/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let n = nums1.length;
  let m = nums2.length;
  let mid = (m + n + 1) >> 1;
  let a = bsearch(nums1, nums2, 0, 0, mid);
  if ((m + n) % 2 == 1) {
    return a;
  }
  let b = bsearch(nums1, nums2, 0, 0, mid + 1);
  return (a + b) / 2;
  function bsearch(nums1, nums2, i, j, k) {
    if (nums1.length == i) {
      return nums2[j + k - 1];
    }
    if (nums2.length == j) {
      return nums1[i + k - 1];
    }
    if (k == 1) {
      return nums1[i] < nums2[j] ? nums1[i] : nums2[j];
    }
    let a = Math.min(k >> 1, nums1.length - i);
    let b = Math.min(k >> 1, nums2.length - j);
    a = k - b;
    if (nums1[i + a - 1] <= nums2[j + b - 1]) {
      return bsearch(nums1, nums2, i + a, j, k - a);
    }
    return bsearch(nums1, nums2, i, j + b, k - b);
  }
};
// @lc code=end
