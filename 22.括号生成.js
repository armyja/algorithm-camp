/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const res = [];

    function go(leftRemain, rightRemain, str) {
        if (leftRemain > rightRemain) {
            return; // The number of '(' should be always >= ')'
        }

        if (leftRemain + rightRemain === 0) {
            res.push(str);
            return;
        }

        if (leftRemain > 0) {
            go(leftRemain - 1, rightRemain, str + '(');
        }
        if (rightRemain > 0) {
            go(leftRemain, rightRemain - 1, str + ')');
        }
    }

    go(n, n, '');
    return res;
};
// @lc code=end

