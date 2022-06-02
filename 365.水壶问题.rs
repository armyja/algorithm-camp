/*
 * @lc app=leetcode.cn id=365 lang=rust
 *
 * [365] 水壶问题
 */

// @lc code=start
impl Solution {
    pub fn can_measure_water(x: i32, y: i32, z: i32) -> bool {
        fn gcd(x: i32, y: i32) -> i32 {
            if x % y == 0 {
                return y;
            } else {
                return gcd(y, x % y);
            }
        }
        x + y >= z && !(x == 0 || y == 0) && z % gcd(x, y) == 0 || z == 0
    }
}
// @lc code=end
