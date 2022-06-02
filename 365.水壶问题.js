/*
 * @lc app=leetcode.cn id=365 lang=javascript
 *
 * [365] 水壶问题
 */

// @lc code=start
/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function (jug1Capacity, jug2Capacity, targetCapacity) {
  if (jug1Capacity + jug2Capacity < targetCapacity) return false;
  if (jug1Capacity === 0 || jug2Capacity === 0)
    return (
      targetCapacity === 0 || jug1Capacity + jug2Capacity === targetCapacity
    );
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  return targetCapacity % gcd(jug1Capacity, jug2Capacity) === 0;
};
// @lc code=end
