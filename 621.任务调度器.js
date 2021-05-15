/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const map = {};
    let tempMaxValue = 0;
    let maxValueCount = 0;
    for (let t of tasks) {
        map[t] = (map[t] || 0) + 1;
        if (map[t] > tempMaxValue) {
            tempMaxValue = map[t];
            maxValueCount = 1;
        } else if (map[t] === tempMaxValue) {
            maxValueCount++;
        }
    }
    return Math.max(tasks.length, maxValueCount + (tempMaxValue - 1) * (n + 1));
};
// @lc code=end

