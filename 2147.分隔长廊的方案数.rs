/*
 * @lc app=leetcode.cn id=2147 lang=rust
 *
 * [2147] 分隔长廊的方案数
 */
struct Solution {}
// @lc code=start
impl Solution {
    pub fn number_of_ways(corridor: String) -> i32 {
        const MOD :i64 = 1000_000_007;
        let mut prev = 0;
        let mut cnt = 0;
        let mut ans:i32 = 1;
        for (i, ch) in corridor.char_indices() {
            if ch == 'S' {
                cnt+= 1;
                if cnt >= 3 && cnt %2 == 1 {
                    ans = ((i  - prev) as i64 * ans as i64 % MOD) as i32;
                }
                prev = i ;
            }
        }
        if cnt < 2 || cnt & 1 != 0 {
            ans = 0
        }
        ans
    }
}
// @lc code=end

