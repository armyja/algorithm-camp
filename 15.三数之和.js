/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let ret = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) {
            continue;
        }
        let k = nums.length - 1;
        for (let j = i + 1; j < nums.length; j++) {
            if (j > i + 1 && nums[j - 1] === nums[j]) {
                continue;
            }

            while (j < k && nums[i] + nums[j] + nums[k] > 0) {
                k--;
            }

            if (j === k) {
                break;
            }

            if (nums[i] + nums[j] + nums[k] === 0) {
                ret.push([nums[i], nums[j], nums[k]]);
            }
        }
    }
    return ret;
};
// @lc code=end
