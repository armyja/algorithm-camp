/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    return isPalindrome(s);
};

var isPalindrome = function (s, left = 0, right = s.length - 1, chance = 1) {
    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            if (!chance) {
                return false;
            }
            chance--;
            return isPalindrome(s, left + 1, right, chance) ||
                isPalindrome(s, left, right - 1, chance);
        }
    }
    return true;
}
// @lc code=end

