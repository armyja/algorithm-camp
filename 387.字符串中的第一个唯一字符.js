/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let len = s.length;
    const arr = Array(26).fill(0);
    for (let i = 0; i < len; i++) {
        const ch = s[i];
        arr[ch.charAt() - 97]++;
    }
    for (let i = 0; i < len; i++) {
        const ch = s[i];
        if (arr[ch.charAt() - 97] === 1) {
            return i;
        }
    }
    return -1;
};
// @lc code=end