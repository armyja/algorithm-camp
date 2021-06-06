/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    let res = 1;
    while (n !== 0) {
        if (n & 1) {
            res *= x;
        }
        x *= x;
        n >>>= 1;
    }
    return res;
};
// @lc code=end

