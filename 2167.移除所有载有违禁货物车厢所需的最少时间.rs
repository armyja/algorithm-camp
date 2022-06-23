/*
 * @lc app=leetcode.cn id=2167 lang=rust
 *
 * [2167] 移除所有载有违禁货物车厢所需的最少时间
 */
struct Solution{}
// @lc code=start
impl Solution {
    pub fn minimum_time(s: String) -> i32 {
        let n = s.len() as i32;
        let mut ans = i32::MAX;
        let mut pre = 0;
        let mut best = 0;
        for (i, b) in s.bytes().enumerate() {
            best = best.min(i as i32 - 2 * pre);
            pre += (b - b'0') as i32;
            ans = ans.min(best + pre * 2 - i as i32);
        }
        n.min(ans + n - 1)
    }
}
// @lc code=end

