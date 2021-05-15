/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let dp = Array(matrix.length + 1).fill(0).map(_ => Array(matrix[0].length + 1).fill(0));

    let res = 0;

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            if (matrix[i - 1][j - 1] !== '0') {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
                res = Math.max(dp[i][j], res);
            }
        }
    }

    return res * res;
};
// @lc code=end
