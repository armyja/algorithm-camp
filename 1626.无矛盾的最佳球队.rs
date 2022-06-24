/*
 * @lc app=leetcode.cn id=1626 lang=rust
 *
 * [1626] 无矛盾的最佳球队
 */

// @lc code=start
impl Solution {
    pub fn best_team_score(scores: Vec<i32>, ages: Vec<i32>) -> i32 {
        let mut ss: Vec<_> = scores.iter().zip(ages.iter()).collect();
        ss.sort_by(|l, r| {
            if l.1 != r.1 {
                l.1.partial_cmp(&r.1).unwrap()
            } else {
                l.0.partial_cmp(&r.0).unwrap()
            }
        });

        let mut dp = vec![0; ss.len()];
        dp[0] = *ss[0].0;
        for i in 1..ss.len() {
            dp[i] = *ss[i].0;
            for j in (0..i).rev() {
                if *ss[j].0 <= *ss[i].0 {
                    dp[i] = dp[i].max(dp[j] + *ss[i].0);
                }
            }
        }

        *dp.iter().reduce(|a, x| a.max(x)).unwrap()
    }

}
// @lc code=end


