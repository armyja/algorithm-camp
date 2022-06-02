/*
 * @lc app=leetcode.cn id=365 lang=golang
 *
 * [365] 水壶问题
 */
package algorithmcamp

// @lc code=start
func canMeasureWater(x int, y int, z int) bool {
	for ; z != 0 && y != 0 && z < x+y; x, y, z = y, x%y, z%y {
	}
	return z == 0 || z == x+y
}

// @lc code=end
