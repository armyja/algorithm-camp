/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let newMax = 0;
    let oldMax = 0;
    let res = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        newMax = Math.max(newMax, i + nums[i]);
        if (i === oldMax) {
            oldMax = newMax;
            res++;
            if (oldMax === nums.length - 1) {
                break;
            }
        }
    }
    return res;
};
// @lc code=end

