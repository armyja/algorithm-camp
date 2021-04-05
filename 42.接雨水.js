/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let stack = [];
    let ret = 0;
    for (let i = 0; i < height.length; i++) {
        while(stack.length && height[i] > height[stack[stack.length - 1]]) {
            let top = stack.pop();
            if (stack.length === 0) {
                break;
            }
            const distance = i - 1 - stack[stack.length - 1];
            const area = (Math.min(height[i], height[stack[stack.length - 1]]) - height[top]) * distance;
            ret += area;
        }
        stack.push(i);
    }
    return ret;
};
// @lc code=end

