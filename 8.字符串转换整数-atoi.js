/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let pre = "", num = "", idx = 0
    while (s[idx] === " ") {
        idx++;
    }

    while (s[idx] === "+" || s[idx] === "-") {
        if (pre) {
            return 0;
        }
        pre = s[idx++];
    }

    while (s[idx] && s[idx].charCodeAt() >= 48 && s[idx].charCodeAt() <= 57) {
        num += s[idx++];
    }

    let res = Number(pre + num) || 0;
    res = Math.max((-2) ** 31, res);
    res = Math.min(2 ** 31 - 1, res);
    return res;
};
// @lc code=end

