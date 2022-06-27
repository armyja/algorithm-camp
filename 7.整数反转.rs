/*
 * @lc app=leetcode.cn id=7 lang=rust
 *
 * [7] 整数反转
 */

// @lc code=start
impl Solution {
    pub fn reverse(x: i32) -> i32 {
        if (x == i32::MIN) {
            return 0;
        }
        let limit = i32::MAX / 10;
        let mut ans = 0;
        let mut n = x.abs();
        while (n != 0) {
            if ans > limit {
                return 0;
            }
            ans = ans * 10 + (n % 10);
            n /= 10;
        }
        ans * x.signum()
    }
}
// @lc code=end

