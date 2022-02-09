/*
 * @lc app=leetcode.cn id=372 lang=javascript
 *
 * [372] 超级次方
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function (a, b) {
  // 1140 是欧拉数
  let numB = b[0];
  for (let index = 1; index < b.length; index++) {
    const element = b[index];
    numB = (numB * 10 + element) % 1140;
  }
  numB = (numB % 1140) + 1140;
  let numA = 1;
  for (let time = 0; time < numB; time++) {
    numA *= a;
    numA %= 1337;
  }
  return numA;
};
// @lc code=end
