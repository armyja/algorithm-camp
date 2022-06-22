/*
 * @lc app=leetcode.cn id=1861 lang=rust
 *
 * [1861] 旋转盒子
 */
struct Solution{}
// @lc code=start
impl Solution {
    pub fn rotate_the_box(mbox: Vec<Vec<char>>) -> Vec<Vec<char>> {
        let mut b: Vec<Vec<char>> = mbox.clone();
        let m = b.len();
        let n = b[0].len();

        for i in 0..m {
            // 队首对应的位置
            let mut front_pos = n - 1;
            for j in (0..n).rev() {
                if b[i][j] == '*' {
                    // 遇到障碍物，清空队列
                    front_pos = j - 1;
                } else if (b[i][j] == '#') {
                    if front_pos > j {
                        b[i][front_pos] = '#';
                        b[i][j] = '.';
                        front_pos -= 1;
                    } else {
                        front_pos = j - 1;
                    }
                }
            }
        }

        // 将矩阵顺时针旋转 90 度放入答案
        let mut ans: Vec<Vec<char>> = vec![vec!['.';m];n];
        for i in 0..m {
            for j in 0..n {
                ans[j][m - i - 1] = b[i][j];
            }
        }
        ans
    }
}
// @lc code=end
