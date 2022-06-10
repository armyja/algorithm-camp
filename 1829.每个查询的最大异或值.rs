/*
 * @lc app=leetcode.cn id=1829 lang=rust
 *
 * [1829] 每个查询的最大异或值
 */
struct Solution {}

// @lc code=start
impl Solution {
    pub fn get_maximum_xor(nums: Vec<i32>, maximum_bit: i32) -> Vec<i32> {
        use std::collections::VecDeque;
        let mut ans: VecDeque<i32> = VecDeque::new();
        let n = nums.len();
        let mask = (1 << maximum_bit) - 1;
        let mut xor_sum = 0;
        for i in nums.iter() {
            xor_sum ^= *i;
            ans.push_front(xor_sum ^ mask);
        }
        ans.into()
    }
}
// @lc code=end
