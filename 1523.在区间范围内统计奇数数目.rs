/*
 * @lc app=leetcode.cn id=1523 lang=rust
 *
 * [1523] 在区间范围内统计奇数数目
 */

// @lc code=start
impl Solution {
    pub fn count_odds(low: i32, high: i32) -> i32 {
        let c = high - low + 1;
        if (c % 2 == 0) {
            return c / 2;
        }
        return (c + if low % 2 == 1 {1} else {-1}) / 2;
    }
}
// @lc code=end

