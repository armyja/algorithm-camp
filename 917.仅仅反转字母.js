/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
    const arr = S.replace(/[^a-z]/ig, "").split("");
    return S.split("").map(s => (/[a-z]/i).test(s) ? arr.pop() : s).join("")
};
// @lc code=end

