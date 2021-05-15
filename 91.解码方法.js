/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function (s) {
    let dp = Array(s.length + 1).fill(0);
    if (s[0] === "0") {
        return 0;
    }
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= s.length; i++) {
        if (s[i - 2] !== "0" && s.substr(i - 2, 2) <= "26") {
            dp[i] += dp[i - 2];
        }
        if (s[i - 1] !== "0") {
            dp[i] += dp[i - 1];
        }
    }
    return dp[s.length];
}
// @lc code=end