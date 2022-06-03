/*
 * @lc app=leetcode.cn id=2289 lang=rust
 *
 * [2289] 使数组按非递减顺序排列
 */
/// 每一个子问题都可以用相同的方法求解
/// 取子问题解的最大值
/// 使用栈存储子问题的过程解
struct  Solution{}
// @lc code=start
impl Solution {
    pub fn total_steps(nums: Vec<i32>) -> i32 {
        // max_t: 当前位置的答案
        struct Pair {
            v: i32,
            max_t: u32,
        }
        // 单调递减的栈
        let mut s: Vec<Pair> = Vec::with_capacity(nums.len());
        let mut ans = 0;
        for v in nums.iter() {
            let mut max_t = 0;
            while !s.is_empty() && s.last().unwrap().v <= *v {
                max_t = u32::max(max_t, s.last().unwrap().max_t);
                s.pop();
            }
            if !s.is_empty() {
                max_t += 1;
                ans = u32::max(ans, max_t);
            } else {
                max_t = 0;
            }
            s.push(Pair { v: *v, max_t });
        }

        ans as i32
    }
}
// @lc code=end
