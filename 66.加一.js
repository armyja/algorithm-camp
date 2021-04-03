/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    for (let p = digits.length - 1; p >= 0; p--) {
        digits[p] = (digits[p] + 1) % 10;
        if (digits[p] !== 0) {
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};
// @lc code=end

