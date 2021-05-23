/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 思路：记录截止到 i 为止，最小的数和最大的数。当前数乘以其中的一个数就是最大的数。
 */
var maxProduct = function (nums) {
    let prevMin = nums[0];
    let prevMax = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            [prevMax, prevMin] = [prevMin, prevMax];
        }
        let currentMin = Math.min(nums[i], nums[i] * prevMin);
        let currentMax = Math.max(nums[i], nums[i] * prevMax);

        prevMin = currentMin;
        prevMax = currentMax;

        max = Math.max(max, currentMax);
    }
    return max;
};
// @lc code=end

