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
    let q = [], r = new Int16Array(nums.length - k + 1), i = -1
    while (++i < k) q.push(max(nums, q, i))
    r[0] = nums[q[0]], i--
    while (++i < nums.length) {
        q.push(max(nums, q, i))
        if (q[0] === i - k) q.shift()
        r[i - k + 1] = nums[q[0]]
    }
    return r
};
const max = (nums, q, i) => {
    while (nums[i] >= nums[q[q.length - 1]]) q.pop() // >=
    return i
}
// @lc code=end

