/*
 * @lc app=leetcode.cn id=2188 lang=rust
 *
 * [2188] 完成比赛的最少时间
 */

// @lc code=start
impl Solution {
    pub fn minimum_finish_time(tires: Vec<Vec<i32>>, change_time: i32, num_laps: i32) -> i32 {
        let mut tab = std::collections::HashMap::with_capacity(tires.len());
        for t in tires.into_iter() {
            let x = tab.entry(t[0]).or_insert(i32::MAX);
            *x = t[1].min(*x);
        }
        let num_laps = num_laps as usize;
        let change_time = change_time as i64;
        let mut dp = vec![0 as i64; num_laps + 1];
        for i in 1..=num_laps {
            let mut cur = i64::MAX;
            for t in tab.iter() {
                let mut sum = 0;
                let mut tmp = 1;
                for j in (0..i).rev() {
                    sum += *t.0 as i64 * tmp;
                    tmp *= *t.1 as i64;
                    cur = cur.min(sum + change_time + dp[j]);
                    // 这里用等比数列通项公式，
                    // 可以推出下一圈，继续使用轮胎的时间大于等于换同一条轮胎跑的时间
                    // 两种情况皆可，所以没有必要继续遍历，可以认为使用后者方案
                    if sum > change_time {break}
                }
            }
            dp[i] = cur;
        }
        (dp[num_laps] - change_time)  as i32
    }
}
// @lc code=end

