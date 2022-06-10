/*
 * @lc app=leetcode.cn id=1284 lang=rust
 *
 * [1284] 转化为全零矩阵的最少反转次数
 */
pub struct Solution {}
// @lc code=start
impl Solution {
    fn convert(mat: &mut Vec<Vec<i32>>, m: usize, n: usize, i: usize, j: usize) {
        let dirs: [i32; 6] = [0, 1, 0, -1, 0, 0];
        for k in 0..5 {
            let x = i as i32 + dirs[k];
            let y = j as i32 + dirs[k + 1];
            if x >= 0 && x < (m as i32) && y >= 0 && y < (n as i32) {
                mat[x as usize][y as usize] ^= 1;
            }
        }
    }
    pub fn min_flips(mat: Vec<Vec<i32>>) -> i32 {
        let m = mat.len();
        let n = mat[0].len();
        let mut ans = i32::MAX;
        for bin in 0..(1 << n) {
            let mut mat_copy = mat.clone();
            let mut filp_cnt = 0;
            for j in 0..n {
                if bin & (1 << j) != 0 {
                    filp_cnt += 1;
                    Self::convert(&mut mat_copy, m, n, 0, j);
                }
            }

            for i in 1..m {
                for j in 0..n {
                    if mat_copy[i - 1][j] == 1 {
                        filp_cnt += 1;
                        Self::convert(&mut mat_copy, m, n, i, j);
                    }
                }
            }
            let mut flag = true;
            for j in 0..n {
                if mat_copy[m - 1][j] != 0 {
                    flag = false;
                    break;
                }
            }
            if flag {
                ans = std::cmp::min(ans, filp_cnt);
            }
        }
        if ans != i32::MAX {
            ans
        } else {
            -1
        }
    }
}
// @lc code=end
