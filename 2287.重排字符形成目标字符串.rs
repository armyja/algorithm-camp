/*
 * @lc app=leetcode.cn id=2287 lang=rust
 *
 * [2287] 重排字符形成目标字符串
 */
struct Solution {}
// @lc code=start
use std::collections::HashMap;
impl Solution {
    pub fn rearrange_characters(s: String, target: String) -> i32 {
        let mut dict = HashMap::new();
        target
            .chars()
            .for_each(|ch| (*dict.entry(ch).or_insert((0, 0))).0 += 1);

        s.chars().for_each(|ch| {
            if let Some((_i, j)) = dict.get_mut(&ch) {
                *j += 1;
            }
        });

        let mut ans = i32::MAX;
        dict.into_values().for_each(|(i, j)| ans = ans.min(j / i));

        ans
    }
}
// @lc code=end
