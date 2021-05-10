/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    let j = 0;
    let i = 0;
    // 第一个满足条件的饼干，授予需求最小的孩子，这样满足条件的孩子尽可能多
    while(i < g.length && j < s.length) {
        if (s[j++] >= g[i]) {
            i++;
        }
    }
    return i;
};
// @lc code=end

