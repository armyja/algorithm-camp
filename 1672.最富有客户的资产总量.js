/*
 * @lc app=leetcode.cn id=1672 lang=javascript
 *
 * [1672] 最富有客户的资产总量
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return Math.max(...accounts.map((i) => i.reduce((a, j) => a + j), 0));
};
// @lc code=end
