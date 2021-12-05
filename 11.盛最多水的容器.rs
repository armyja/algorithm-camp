/*
 * @lc app=leetcode.cn id=11 lang=rust
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let mut left = 0;
        let mut right = height.len() - 1;
        let mut ret = 0;
        while left < right {
            let h = if height[left] < height[right] { left += 1; height[left - 1] } else { right -= 1; height[right + 1] };
            ret = ret.max(h * (right - left + 1) as i32);
        }
        ret
    }
}
// @lc code=end

