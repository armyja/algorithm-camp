/*
 * @lc app=leetcode.cn id=15 lang=rust
 *
 * [15] 三数之和
 */

// @lc code=start
impl Solution {
    pub fn three_sum(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        if nums.len() < 3 {
            return vec![];
        }
        nums.sort_unstable();
        let mut ret = vec![];
        let mut lastnum = 1;
        for (i, &num) in nums.iter().enumerate() {
            if num > 0 {
                break;
            }
            if num == lastnum {
                continue;
            }
            let mut l = i+1;
            let mut r = nums.len() - 1;
            while l < r {
                let sum = num + nums[l] + nums[r];
                if sum == 0 {
                    ret.push(vec![num, nums[l], nums[r]]);
                    while l < r && nums[l] == nums[l + 1] {
                        l += 1;
                    }
                    l += 1;
                } else if sum < 0 {
                    l += 1;
                } else {
                    r -= 1;
                }
            }
            lastnum = num;
        }
        ret
    }
}
// @lc code=end