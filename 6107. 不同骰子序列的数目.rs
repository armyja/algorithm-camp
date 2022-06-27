/*
 * @lc app=leetcode.cn id=6107 lang=rust
 *
 * [6107] 不同骰子序列的数目
 */
struct Solution {}
// @lc code=start
impl Solution {
    pub fn distinct_sequences(n: i32) -> i32 {
        if n == 1 {
            return 6;
        }
        fn gcd(a: i32, b: i32) -> i32 {
            if a % b == 0 {
                b
            } else {
                gcd(b, a % b)
            }
        }
        let mut gcd_cache = [[0; 7]; 7];
        let mut f = [[0; 7]; 7];
        for i in 1..7 {
            for j in 1..7 {
                gcd_cache[i][j] = gcd(i as i32, j as i32);
                if i != j && gcd_cache[i][j] == 1 {
                    f[i][j] = 1;
                }
            }
        }
        for _ in 2..n {
            let mut g = [[0; 7]; 7];
            for i in 1..7 {
                for j in 1..7 {
                    if f[i][j] == 0 {
                        continue;
                    }
                    for k in 1..7 {
                        if i == k || j == k || gcd_cache[j][k] > 1 {
                            continue;
                        }
                        g[j][k] = (g[j][k] + f[i][j]) % 1_000_000_007;
                    }
                }
            }
            f = g;
        }
        let mut ans = 0;
        for i in 1..7 {
            for j in 1..7 {
                ans = (ans + f[i][j]) % 1_000_000_007;
            }
        }
        ans
    }
}
// @lc code=end
