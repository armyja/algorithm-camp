/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
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
    return Math.max(robRange(nums, 0, len - 1), robRange(nums, 1, len));
};

function robRange(nums, start, end) {
    let len = end - start;
    let dp = Array(len).fill(0);
    dp[0] = nums[start];
    for (let i = 1; i < len; i++) {
        dp[i] = Math.max(nums[i + start] + (dp[i - 2] || 0), dp[i - 1]);
    }
    return dp[len - 1];
}
// @lc code=end

