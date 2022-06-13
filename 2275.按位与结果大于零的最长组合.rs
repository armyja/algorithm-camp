/*
 * @lc app=leetcode.cn id=2275 lang=rust
 *
 * [2275] 按位与结果大于零的最长组合
 */
struct Solution{}
// @lc code=start
impl Solution {
    pub fn largest_combination(candidates: Vec<i32>) -> i32 {
        let mut res = 0;
        // 2^23 = 8388608
        // 2^24 = 16777216
        for n in 0..24 {
            let mut cnt = 0;
            for i in 0..candidates.len() {
                if candidates[i] & (1<<n) != 0 {
                    cnt += 1
                }
            }
            res = std::cmp::max(res, cnt);
        }
        res
    }
}
// @lc code=end

