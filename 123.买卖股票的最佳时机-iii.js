/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// @lc code=end

// 
var maxProfit = function(prices) {
    let profits1 = Array(prices.length);
    let profits2 = Array(prices.length);
    let maxP = 0;
    let min = Infinity;
    let max = -Infinity;
    let res = 0;

    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        maxP = Math.max(maxP, prices[i] - min);
        profits1[i] = maxP;
    }

    
    maxP = 0;

    for(let i = prices.length - 1; i >= 0; i--) {
        max = Math.max(max, prices[i]);
        maxP = Math.max(maxP, max - prices[i]);
        profits2[i] = maxP;
    }

    for (let i = 0; i < prices.length; i++) {
        res = Math.max(res, profits1[i] + profits2[i]);
    }
    
    return res;
};
