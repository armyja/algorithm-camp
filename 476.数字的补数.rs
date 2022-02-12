/*
 * @lc app=leetcode.cn id=476 lang=rust
 *
 * [476] 数字的补数
 */

// @lc code=start
impl Solution {
    pub fn find_complement(num: i32) -> i32 {
        // 当 num = 2147483647，即 2 ^ 31 - 1，这是最大的32位带符号正整数。
        // 1 左移 31 位，应当为正数。如果用 i32 表示，则为负数，不满足题目要求。
        // (1 << (32 - num.leading_zeros())) as i32 - 1 - num
        // 全覆盖 1，减去 num
        ((1 << (32 - num.leading_zeros())) as u32 - 1 - (num as u32)) as i32

    }
}
// @lc code=end

