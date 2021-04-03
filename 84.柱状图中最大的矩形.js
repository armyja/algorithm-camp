/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0;
    let arr = [0, ...heights, 0];
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
        while(arr[i] < arr[stack[stack.length - 1]]) {
            let topIndex = stack.pop();
            maxArea = Math.max(
                maxArea,
                arr[topIndex] * (i - 1 - stack[stack.length - 1])
            );
        }
        stack.push(i);
    }
    return maxArea;
};
// @lc code=end

