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
    let arr = [0, ...heights, 0];
    let st = [];
    let ret = 0;
    for (let i = 0; i < arr.length; i++) {
        while (st.length && arr[st[st.length - 1]] > arr[i]) {
            let topIndex = st.pop();
            // at this moment, the top item is the left lower edge of topIndex.
            // width = i - 1 - st[st.length - 1]
            ret = Math.max(ret, arr[topIndex] * (i - 1 - st[st.length - 1]));
        }
        st.push(i);
    }
    return ret;
};
// @lc code=end

