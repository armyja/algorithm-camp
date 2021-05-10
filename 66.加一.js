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
        // mod 10
        digits[p] = (digits[p] + 1) % 10;
        if (digits[p] !== 0) {
            // return immediately
            return digits;
        }
    }
    // sure to add 1 digit
    digits.unshift(1);
    return digits;
};
// @lc code=end

