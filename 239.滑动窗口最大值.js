/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
     const q = [];
     const ret = [];
     for (let i = 0; i < nums.length; i++) {
        while (q && nums[q[q.length - 1]] < nums[i]) {
            q.pop();
        }
        q.push(i);
        // remove first element if it's outside the window
        if (q[0] === i - k) {
            q.shift();
        }
        // if window has k elements add to results
        if (i >= k - 1) {
            ret.push(nums[q[0]]);
        }
     }
     return ret;
};
// @lc code=end

