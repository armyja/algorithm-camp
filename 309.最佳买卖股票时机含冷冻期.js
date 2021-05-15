/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var buy = -Infinity;
    var free = 0, last = 0, now = 0;
    prices.forEach(x => {
        now = Math.max(last, x + buy);
        buy = Math.max(buy, free - x);
        free = last;
        last = now;
    });
    return now;
};
// @lc code=end

