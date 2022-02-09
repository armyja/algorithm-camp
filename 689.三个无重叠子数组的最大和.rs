/*
 * @lc app=leetcode.cn id=689 lang=rust
 *
 * [689] 三个无重叠子数组的最大和
 */

// @lc code=start
impl Solution {
    pub fn max_sum_of_three_subarrays(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let mut answer = vec![0; 3];
        let mut sum1 = 0;
        let mut max_sum1 = 0;
        let mut max_sum1idx = 0;
        let mut sum2 = 0;
        let mut max_sum12 = 0; // max_sum12 需要记录 满足时的 index1 和 index2
        let mut max_sum2idx1 = 0;
        let mut max_sum2idx2 = 0;
        let mut sum3 = 0;
        let mut max_sum123 = 0;
        for i  in (2 * k)..(nums.len() as i32) {
            sum1 += nums[(i - k - k) as usize]; // 初始 [0 ~ k-1]
            sum2 += nums[(i - k) as usize]; // 初始 [k ~ 2*k-1]
            sum3 += nums[i as usize]; // 初始 [2k ~ 3*k-1]

            if i >= 3 * k - 1 {
                if sum1 > max_sum1 {
                    max_sum1 = sum1;
                    max_sum1idx = i - k * 3 + 1;
                }

                if max_sum1 + sum2 > max_sum12 {
                    max_sum12 = max_sum1 + sum2;
                    max_sum2idx1 = max_sum1idx;
                    max_sum2idx2 = i - k * 2 + 1;
                }

                if max_sum12 + sum3 > max_sum123 {
                    max_sum123 = max_sum12 + sum3;
                    answer[0] = max_sum2idx1;
                    answer[1] = max_sum2idx2;
                    answer[2] = i - k + 1;
                }

                sum1 -= nums[(i - k * 3 + 1) as usize];
                sum2 -= nums[(i - k * 2 + 1) as usize];
                sum3 -= nums[(i - k + 1) as usize];
            }
        }
        return answer;
    }
}
// @lc code=end

