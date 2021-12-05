/*
 * @lc app=leetcode.cn id=14 lang=rust
 *
 * [14] 最长公共前缀
 */

// @lc code=start
impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        if strs.len() == 0 || &strs[0] == "" {
            return String::new();
        }
        let mut n: usize = 1;
        loop {
            for word in strs.iter() {
                if n > word.len() || &strs[0][0..n] != &word[0..n] {
                    return String::from(&strs[0][0..n - 1]);
                }
            }
            n += 1;
        }
    }
}
// @lc code=end

