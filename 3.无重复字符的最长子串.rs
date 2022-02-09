/*
 * @lc app=leetcode.cn id=3 lang=rust
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        // let mut hash_map = HashMap::new();
        use std::cmp::max;
        let mut last : [i32; 128] = [-1; 128];
        let mut left : i32 = -1;
        let mut ans = 0;
        for (i, c) in s.chars().enumerate() {
            left = max(left, last[c as usize]);
            last[c as usize] = i as i32;
            ans = max(i as i32 - left, ans);
        }
        ans
    }
}
// @lc code=end

fn main() {
    let f = Solution::new();
    println!("{}", f.length_of_longest_substring('abcacbsabc'));
}
