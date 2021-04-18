/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = {};
    let maxCount = 0;
    let res = null;
    for (let i of nums) {
        map[i] = map[i] === undefined ? 1 : map[i] + 1;
        if (map[i] > maxCount) {
            maxCount = map[i];
            res = i;
        }
    }
    return res;
};
// @lc code=end

