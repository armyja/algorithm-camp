/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    let len = nums.length;
    if (len === 1) {
        return nums[0];
    }
    let dp = Array(nums.length);
    
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    }
    return dp[len - 1];
};
// @lc code=end

