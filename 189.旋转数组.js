/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let start = 0;
    let count = 0;
    while (count < nums.length) {
        let curr = start;
        let prev = nums[start];
        do {
            curr = (curr + k) % nums.length;
            [nums[curr], prev] = [prev, nums[curr]];
            // 计数完不必马上做判断，跳出循环外再做判断。
            count++;
        } while (curr !== start);
        start++;
    }
};
// @lc code=end

