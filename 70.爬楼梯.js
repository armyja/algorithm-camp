/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 4) {
        return n;
    }
    let a = 1;
    let b = 2;
    let temp = null;
    for (let i = 3; i <=n; i++) {
        temp = a;
        a = b;
        b = temp + b;
    }
    return b;
};
// @lc code=end

