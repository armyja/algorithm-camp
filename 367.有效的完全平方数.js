/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let prev = num;
    while (true) {
        let curr = prev - (prev * prev - num) / (2 * prev);
        if (prev - curr < 0.1) {
            break;
        }
        prev = curr;
    }
    prev = Math.floor(prev);
    return num === prev * prev;
};
// @lc code=end

