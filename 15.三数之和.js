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
    let ret = new Array();
    if (nums.length < 3) {
        return ret;
    }
    nums.sort((a, b)=> a-b);
    for (let first = 0; first < nums.length; first++) {
        if ((first > 0) && nums[first] === nums[first - 1]) {
            continue;
        }
        let third = nums.length - 1;
        for (let second = first + 1; second < nums.length; second++) {
            if ((second > first + 1) && nums[second] === nums[second - 1]) {
                continue;
            }
            while ((second < third) && (nums[second] + nums[third] + nums[first] > 0)) {
                third--;
            }
            if (second === third) {
                break;
            }
            if (nums[second] + nums[third] + nums[first] === 0) {
                ret.push([nums[first], nums[second], nums[third]])
            }
        }

    }
    return ret;
};
// @lc code=end
threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4])

