/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 0;
    for (let right = left + 1; right < nums.length; right++) {
        if (nums[right] !== nums[right -1]) {
            nums[++left] = nums[right]; 
        }
    }
    return left + 1;
};
// @lc code=end

