/*
 * @lc app=leetcode.cn id=1020 lang=rust
 *
 * [1020] 飞地的数量
 */

// @lc code=start
use std::collections::VecDeque;
impl Solution {
    pub fn num_enclaves(grid: Vec<Vec<i32>>) -> i32 {
        let mut ans = 0;
        let mut q = VecDeque::new();
        let mut visited = vec![vec![false; grid[0].len()]; grid.len()];
        for i in 0..grid.len() {
            for j in 0..grid[0].len() {
                if grid[i][j] == 0 {
                    continue;
                }
                ans += 1;
                if i == 0 || i == grid.len() - 1 || j == 0 || j == grid[0].len() - 1 {
                    q.push_back((i, j));
                    visited[i][j] = true;
                }
            }
        }
        while !q.is_empty() {
            let (i, j) = q.pop_front().unwrap();
            ans -= 1;
            // 负数了怎么办？
            for (x, y) in [(i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)] {
                if x < grid.len() && y < grid[0].len() && !visited[x][y] && grid[x][y] == 1 {
                    q.push_back((x,y));
                    visited[x][y] = true;
                }
            }
        }
        ans
    }
}
// @lc code=end

