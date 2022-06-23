/*
 * @lc app=leetcode.cn id=45 lang=rust
 *
 * [45] 跳跃游戏 II
 */
struct Solution{}
// @lc code=start
impl Solution {
    pub fn jump(nums: Vec<i32>) -> i32 {
        let mut end = 0;
        let mut max_pos = 0;
        let len = nums.len();
        let mut res = 0;
        for i in 0..(len - 1) {
            max_pos = std::cmp::max(max_pos, i as i32 + nums[i]);
            if i as i32 == end {
                end = max_pos;
                res += 1;
            }
        }
        res
    }
}
// @lc code=end

