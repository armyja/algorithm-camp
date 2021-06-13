/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    const m = s.length;
    const n = t.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < m; i++) {
        for (let j = n; j > 0; j--) {
            if (s[i] === t[j - 1]) {
                dp[j] += dp[j - 1];
            }
        }
    }
    return dp[n];
};
// @lc code=end

