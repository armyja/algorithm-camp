/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findLength = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    let dp = Array(n +1).fill(0);
    let max = 0;
    for (let i = 1; i <= m; i++) {
        // 逆序，一维数组
        for (let j = n; j >= 1; j--) {
            dp[j] = (nums1[i - 1] === nums2[j - 1]) ? dp[j - 1] + 1 : 0;
            max = Math.max(max, dp[j]);
        }
    }
    return max;
};
// @lc code=end

var isIsomorphic = function(s, t) {
    let len = s.length;
    const map = {};
    for (let i = 0; i < len; i++) {
        const val1 = s[i];
        const val2 = t[i];
        if (map[val1] === undefined) {
            map[val1] = val2;
            continue;
        }
        if (map[val1] !== val2) {
            return false;
        }
    }
    return true;
};

isIsomorphic("badc", "baba");