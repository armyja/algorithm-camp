/*
 * @lc app=leetcode.cn id=1291 lang=rust
 *
 * [1291] 顺次数
 */
struct Solution{}
// @lc code=start
impl Solution {
    pub fn sequential_digits(low: i32, high: i32) -> Vec<i32> {
        let mut ret = Vec::new();
        for i in 1..10 {
            let mut num = i;
            for j in (i+1)..10 {
                num = num * 10 + j;
                if num > high {
                    break;
                }
                if num >= low {
                    ret.push(num);
                }
            }
        }
        ret.sort_unstable();
        return ret;
    }
}
// @lc code=end
