/*
 * @lc app=leetcode.cn id=1987 lang=rust
 *
 * [1987] 不同的好子序列数目
 */
struct Solution{}
// 容斥原理
// @lc code=start
impl Solution {
    pub fn number_of_unique_good_subsequences(binary: String) -> i32 {
        const MOD: i32 = 1000_000_007;
        let mut even = 0;
        let mut odd = 0;
        for ch in binary.chars() {
            if '0' == ch {
                even = (even + odd) % MOD;
            }
            else {
                odd = (even + odd + 1) % MOD;
            }
        }
        (even + odd + (binary.find('0') != None) as i32) % MOD
    }
}
// @lc code=end

