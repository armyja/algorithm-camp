/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 用 map 存，计数
var isAnagram = function(s, t) {
    const map = {};
    s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
    t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
    return Object.keys(map).every(k => map[k] === 0);
};
// @lc code=end

var isAnagram_me = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const map = {};
    for (let i of s) {
        map[i] = map[i] ? map[i] + 1 : 1;
    }
    for (let i of t) {
        // map[i] may be undefined or 0
        if (map[i]) {
            map[i]--;
        } else {
            return false;
        }
    }
    return true;
};