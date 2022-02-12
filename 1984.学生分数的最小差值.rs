/*
 * @lc app=leetcode.cn id=1984 lang=rust
 *
 * [1984] 学生分数的最小差值
 */

// @lc code=start
impl Solution {
    pub fn minimum_difference(mut nums: Vec<i32>, k: i32) -> i32 {
        if k == 1 {
            return 0;
        }
        nums.sort();
        nums.windows(k as usize)
            .into_iter()
            .map(|x| (x[0] - x[x.len() - 1]).abs())
            .min()
            .unwrap()
    }
}
// @lc code=end

