/*
 * @lc app=leetcode.cn id=4 lang=rust
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
impl Solution {
    pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {
        let get = |vec: &Vec<i32>, idx: i32| {
            if idx == -1 {
                i32::MIN
            } else if idx < vec.len() as i32 {
                vec[idx as usize]
            } else {
                i32::MAX
            }
        };
        let (nums1, nums2) = if nums1.len() > nums2.len() {
            (&nums2, &nums1)
        } else {
            (&nums1, &nums2)
        };

        let half = (nums1.len() + nums2.len()) as i32 / 2;
        let (mut left, mut right) = (0 as i32, nums1.len() as i32);
        while left < right {
            let mid = (left + right) / 2;
            let (i, j) = (mid, half - mid);
            let result = nums1[i as usize] >= get(&nums2, j - 1);
            if result {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        let i = left;
        let j = half - left;
        let v1 = std::cmp::max(get(&nums1, i - 1), get(&nums2, j - 1));
        let v2 = std::cmp::min(get(&nums1, i), get(&nums2, j));
        if (nums1.len() + nums2.len()) % 2 == 0 {
            (v1 + v2) as f64 / 2 as f64
        } else {
            v2 as f64
        }
    }
}
// @lc code=end

