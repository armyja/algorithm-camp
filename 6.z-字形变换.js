/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let len = Math.min(s.length, numRows);
  let rows = new Array(len).fill("");
  let loc = 0;
  let step = -1;
  for (let c of s) {
    rows[loc] += c;
    if (loc === 0 || loc === numRows - 1) {
      step = -step;
    }
    loc += step;
  }
  return rows.join("");
};
// @lc code=end
