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
        if (map[i]) {
            map[i]--;
        } else {
            return false;
        }
    }
    return true;
};