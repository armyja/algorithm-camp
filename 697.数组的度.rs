/*
 * @lc app=leetcode.cn id=697 lang=rust
 *
 * [697] 数组的度
 */

// @lc code=start
use std::cmp::Ordering;
use std::collections::HashMap;
impl Solution {
    pub fn find_shortest_sub_array(nums: Vec<i32>) -> i32 {
        let mut range = HashMap::with_capacity(nums.len());
        let mut max_frequency = 0;
        let mut min_range = 0;

        for (i, num) in (0..).zip(nums) {
            let (first, last, count) = *range
                .entry(num)
                .and_modify(|(_, last, count)| {
                    *last = i;
                    *count += 1;
                })
                .or_insert((i, i, 1));

            match count.cmp(&max_frequency) {
                Ordering::Less => {}
                Ordering::Equal => min_range = min_range.min(last - first + 1),
                Ordering::Greater => {
                    max_frequency = count;
                    min_range = last - first + 1;
                }
            }
        }

        min_range
    }
}
// @lc code=end
