/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    const vals = [1, ...nums, 1];
    const n = nums.length;
    const dp = [...Array(n + 2)].map(() => Array(n + 2).fill(0));
    for (let len = 1; len <= n; len++) {
      for (let i = 0; i + len + 1 <= n + 1; i++) {
        const j = i + len + 1;
        for (let k = i + 1; k < j; k++) {
          dp[i][j] = Math.max(
            dp[i][j],
            dp[i][k] + vals[i] * vals[k] * vals[j] + dp[k][j],
          );
        }
      }
    }
    return dp[0][n + 1];
};
// @lc code=end

