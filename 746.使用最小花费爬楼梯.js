/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let prev = 0;
    let curr = 0;
    let next;
    for (let i = 2; i <= cost.length; i++) {
        next = Math.min(prev + cost[i - 2], curr + cost[i - 1]);
        prev = curr;
        curr = next;
    }
    return curr;
};
// @lc code=end

