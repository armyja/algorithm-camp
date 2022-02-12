/*
 * @lc app=leetcode.cn id=972 lang=javascript
 *
 * [972] 相等的有理数
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isRationalEqual = function (s, t) {
  let sStart = s.split("(")[0] || s;
  let newS = (s.split("(")[1] && s.split("(")[1].split(")")[0]) || "0";
  sStart = sStart.includes(".") ? sStart : sStart + ".";
  newS = newS.padEnd(100, newS);
  let tStart = t.split("(")[0] || t;
  let newT = (t.split("(")[1] && t.split("(")[1].split(")")[0]) || "0";
  tStart = tStart.includes(".") ? tStart : tStart + ".";
  newT = newT.padEnd(100, newT);

  return parseFloat(sStart + newS) === parseFloat(tStart + newT);
};
// @lc code=end
