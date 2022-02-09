/*
 * @lc app=leetcode.cn id=1816 lang=rust
 *
 * [1816] 截断句子
 */

// @lc code=start
impl Solution {
    pub fn truncate_sentence(s: String, k: i32) -> String {
        s.split_whitespace()
            .take(k as usize)
            .collect::<Vec<_>>()
            .join(" ");
    }
}
// @lc code=end
