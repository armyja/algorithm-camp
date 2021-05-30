/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    // 消除一个 1，若没有 1，则为 2 的幂次方。
    return n > 0 && (n & (n - 1)) === 0;
};

// @lc code=end

var isPowerOfTwo = function (n) {
    // 保留最右边的 1，将其他设置为 0。
    return n > 0 && (n & -n) === n;
};