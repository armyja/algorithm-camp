/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let ret = 0;
    while (left < right) {
        let h = height[left] < height[right] ? height[left++] : height[right--];
        ret = Math.max(ret, h * (right - left + 1));
    }
    return ret;
};
// @lc code=end

