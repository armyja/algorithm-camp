/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let len = s.length, ans = 0
    for (let i = 0; i < len; i++) {
        let j = i - 1, k = i
        while (k < len - 1 && s[k] === s[k+1]) k++
        ans += (k - j) * (k - j + 1) / 2, i = k++
        while (~j && k < len && s[k] === s[j]) j--, k++, ans++
    }
    return ans
};
// @lc code=end

