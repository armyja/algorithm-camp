/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let dp = [];
    let len = 1;
    dp[1] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > dp[len]) {
            dp[++len] = nums[i];
        } else {
            let pos = 0;
            let left = 1;
            let right = len;
            while (left < right) {
                const mid = (left + right) >> 1;
                if (dp[mid] < nums[i]) {
                    pos = mid;
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            dp[pos + 1] = nums[i];
        }
    }
    return len;
};
// @lc code=end