/*
 * @lc app=leetcode.cn id=1523 lang=javascript
 *
 * [1523] 在区间范围内统计奇数数目
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let c = high - low + 1;
    if (c % 2 === 0) {
        return c / 2;
    }
    return (c + ((low % 2 === 1) ? 1 : -1) ) / 2;
};
// @lc code=end

