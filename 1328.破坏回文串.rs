/*
 * @lc app=leetcode.cn id=1328 lang=rust
 *
 * [1328] 破坏回文串
 */

// @lc code=start
impl Solution {
    pub fn break_palindrome(palindrome: String) -> String {
        if palindrome.len() < 2 {
            return String::new();
        }
        let mut s: Vec<char> = palindrome.chars().collect();
        let n = palindrome.len();
        for i in 0..n / 2 {
            if s[i] != 'a' {
                s[i] = 'a';
                return s.into_iter().collect();
            }
        }
        s[n - 1] = 'b';
        s.into_iter().collect()
    }
}
// @lc code=end
