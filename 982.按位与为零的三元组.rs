/*
 * @lc app=leetcode.cn id=982 lang=rust
 *
 * [982] 按位与为零的三元组
 */
struct Solution{}

// @lc code=start
impl Solution {
    pub fn count_triplets(nums: Vec<i32>) -> i32 {
        let mut res = 0;
        let mut vc = vec![0;1<<16];
        let len = nums.len();
        for i in 0..len {
            for j in 0..len {
                let num = (nums[i] & nums[j]) as usize;
                vc[num] = vc[num] + 1;
            }
        }
        for i in 0..len {
            // 取反
            let numr = (1 << 16) - 1 - nums[i];
            // 通过去除末尾的 1 来搜索结果
            let mut j = numr;
            while j != 0 {
                res += vc[j as usize];
                j = (j - 1) & numr;
            }
            res += vc[0];
        }
        res
    }
}
// @lc code=end
