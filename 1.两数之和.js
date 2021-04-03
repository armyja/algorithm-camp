/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {}
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i]
        if (hash[target - val] !== undefined) {
            return [hash[target - val], i]
        }
        if (hash[val] === undefined) {
            hash[val] = i;
        }
    }
    return [];
};
// @lc code=end

