/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxAns = nums[0];
    let pre = 0;
    for (let i = 0; i < nums.length; i++) {
        pre = Math.max(nums[i], pre + nums[i]);
        maxAns = Math.max(maxAns, pre); 
    }
    return maxAns;
};
// @lc code=end

