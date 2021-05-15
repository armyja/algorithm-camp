/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(k, prices) {
    k = Math.min(k, Math.floor(prices.length / 2));
    const dp = new Int16Array(k << 1).fill(-prices[0]);
    for (let i = 0; i < prices.length; i++) {
        for (let j = 0; j < dp.length; j++) {
            dp[j] = Math.max(dp[j], (dp[j - 1] || 0) + (j & 1 ? prices[i] : -prices[i]))
        }
    }
    return Math.max(0, ...dp);
};
// @lc code=end

