/*
 * @lc app=leetcode.cn id=1937 lang=rust
 *
 * [1937] 扣分后的最大得分
 */

// @lc code=start
use std::cmp::max;
impl Solution {
    pub fn max_points(points: Vec<Vec<i32>>) -> i64 {
        let m = points.len();
        let n = points[0].len();
        let mut dp: Vec<i64> = vec![0 as i64; n];
        for r in 0..m {
            let mut cur = vec![0; n];
            let mut lmax = 0;
            for c in 0..n {
                lmax = max(lmax - 1, dp[c]);
                cur[c] = lmax;
            }

            let mut rmax = 0;
            for c in (0..n).rev() {
                rmax = max(rmax - 1, dp[c]);
                cur[c] = max(rmax, cur[c]);
            }

            for c in 0..n {
                dp[c] = cur[c] + points[r][c] as i64;
            }
        }

        *dp.iter().max().unwrap()
    }
}
// @lc code=end
