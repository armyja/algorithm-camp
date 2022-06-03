/*
 * @lc app=leetcode.cn id=920 lang=rust
 *
 * [920] 播放列表的数量
 */
/// 公式看不懂
struct Solution {}
// @lc code=start
impl Solution {
    pub fn num_music_playlists(n: i32, goal: i32, k: i32) -> i32 {
        const MOD: usize = 1_000_000_007;
        let n = n as usize;
        let goal = goal as usize;
        let k = k as usize;

        // dp[S] at time P = <S, P> as discussed in article
        let mut dp: Vec<usize> = vec![1; goal - n + 1];
        for p in 2..n - k + 1 {
            for i in 1..goal - n + 1 {
                dp[i] += dp[i - 1] * p;
                dp[i] %= MOD;
            }
        }

        // Multiply by N!
        let mut ans = dp[goal - n];
        for k in 2..(n + 1) as usize {
            ans = ans * k % MOD;
        }
        ans as i32
    }
}
// @lc code=end
