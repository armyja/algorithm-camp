/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits === null || digits.length === 0) {
        return [];
    }

    const res = [];
    const len = digits.length;
    const map = {
        '2': "abc",
        '3': "def",
        '4': "ghi",
        '5': "jkl",
        '6': "mno",
        '7': "pqrs",
        '8': "tuv",
        '9': "wxyz"
    };

    function createLetterCombinations(str, index) {
        if (index === len) {
            res.push(str);
            return;
        }
        for (let c of map[digits[index]]) {
            createLetterCombinations(str + c, index + 1);
        }
    }

    createLetterCombinations('', 0);
    return res;

};
// @lc code=end

