/*
 * @lc app=leetcode.cn id=387 lang=rust
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
impl Solution {
    pub fn first_uniq_char(s: String) -> i32 {
        let mut arr : Vec<usize> = vec![0; 26];
        for c in s.chars() {
            arr[c as usize - 97] += 1;
        }
        for (i, c) in s.chars().enumerate() {
            if arr[c as usize - 97] == 1 {
                return i as i32;
            }
        }
        -1
    }
}
// @lc code=end

