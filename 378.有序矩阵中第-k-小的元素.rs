/*
 * @lc app=leetcode.cn id=378 lang=rust
 *
 * [378] 有序矩阵中第 K 小的元素
 */
struct Solution{}
// @lc code=start
impl Solution {
    pub fn kth_smallest(matrix: Vec<Vec<i32>>, k: i32) -> i32 {
        let n = matrix.len();
        let mut lo = matrix[0][0];
        let mut hi = matrix[n-1][n-1];

        while lo < hi {
            let mid = lo + (hi - lo) / 2;

            if Self::check(&matrix, mid, k, n) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }

        lo
    }

    fn check(matrix: &Vec<Vec<i32>>, mid: i32, k: i32, n: usize) -> bool {
        let mut i = n - 1;
        let mut j = 0;
        let mut num = 0;
        while i >= 0 && i < n &&  j < n {
            if matrix[i][j] <= mid {
                num += i + 1;
                j += 1;
            } else {
                i -= 1;
            }
        }

        num as i32 >= k
    }
}
// @lc code=end
