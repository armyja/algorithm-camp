/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 === 1) {
        return false;
    }
    arr = []
    const dict = {
        "}" : "{",
        "]" : "[",
        ")" : "("
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (dict[char] &&  arr[arr.length - 1] === dict[char]) {
            arr.pop()
        } else {
            arr.push(char);
        }
    }
    return arr.length === 0;
};
// @lc code=end

