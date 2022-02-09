/*
 * @lc app=leetcode.cn id=372 lang=rust
 *
 * [372] 超级次方
 */

// @lc code=start
impl Solution {
    pub fn super_pow(a: i32, b: Vec<i32>) -> i32 {
        let b = b.into_iter().fold(0, |s, bi| (s * 10 + bi) % 1140);
        (0..b).fold(1, |s, _| s * a as i64 % 1337) as i32
    }
}
// @lc code=end

