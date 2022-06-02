/*
 * @lc app=leetcode.cn id=9 lang=rust
 *
 * [9] 回文数
 */

// @lc code=start
impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
        if x < 0 || (x % 10 == 0 && x != 0) {
            return false;
        }
        let mut n = 0;
        let mut num = x;

        while num > 0 {
            n = n * 10 + num % 10;
            num /= 10;
        }
        match x == n {
            true => return true,
            false => return false,
        }
    }
}
// @lc code=end
