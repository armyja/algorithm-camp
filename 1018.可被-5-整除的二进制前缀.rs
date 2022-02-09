/*
 * @lc app=leetcode.cn id=1018 lang=rust
 *
 * [1018] 可被 5 整除的二进制前缀
 */

// @lc code=start
impl Solution {
    pub fn prefixes_div_by5(a: Vec<i32>) -> Vec<bool> {
        a.iter().scan(0, |sum, &x| {*sum = (*sum * 2 + x) % 5;Some(*sum == 0)}).collect()
    }
}
// @lc code=end

