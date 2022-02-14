/*
 * @lc app=leetcode.cn id=639 lang=rust
 *
 * [639] 解码方法 II
 */

// @lc code=start
impl Solution {
    pub fn num_decodings(s: String) -> i32 {
        let m = 1_000_000_007;
        let (mut a, mut b, mut c) = (0i64, 1i64, 0i64);
        let bytes = s.as_bytes();
        for i in 0..bytes.len() {
            c = b * Self::check1digit(bytes[i]) % m;
            if i > 0 {
                c += a * Self::check2digits(bytes[i - 1], bytes[i]) % m;
            }
            c %= m;
            a = b;
            b = c;
        }
        c as i32
    }

    fn check1digit(b: u8) -> i64 {
        match b {
            b'*' => 9,
            b'0' => 0,
            _ => 1,
        }
    }

    fn check2digits(b1: u8, b2: u8) -> i64 {
        match (b1, b2) {
            (b'*', b'*') => 15,
            (b'*', x) => {
                if x > b'6' {
                    1
                } else {
                    2
                }
            }
            (x, b'*') => match x {
                b'1' => 9,
                b'2' => 6,
                _ => 0,
            }  
            (b'1', _) => 1,
            (b'2', b'0'..=b'6') => 1,
            _ => 0,
        }
    }
}
// @lc code=end

