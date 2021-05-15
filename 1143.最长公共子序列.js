/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length;
    let n = text2.length;
    let dp = Array.from({length: m}, el => new Uint32Array(n));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (text1[i] === text2[j]) {
                dp[i][j] = getVal(i - 1, j - 1) + 1;
            } else {
                dp[i][j] = Math.max(getVal(i - 1, j), getVal(i, j - 1));
            }
        }
    }

    function getVal(i, j) {
        return (i < 0 || j < 0) ? 0 : dp[i][j];
    }

    return dp[m - 1][n -1];
};
// @lc code=end

