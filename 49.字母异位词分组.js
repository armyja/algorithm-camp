/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const ret = {};
    for (let s of strs) {
        let count = new Array(26).fill(0);
        for (let c of s) {
            count[c.charCodeAt() - 'a'.charCodeAt()]++; 
        }
        ret[count] ? ret[count].push(s) : ret[count] = [s]
    }
    return Object.values(ret);
};
// @lc code=end

