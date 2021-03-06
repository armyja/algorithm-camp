/*
 * @lc app=leetcode.cn id=1034 lang=rust
 *
 * [1034] 边界着色
 */

// @lc code=start
use std::collections::VecDeque;

impl Solution {
    // bfs?
    pub fn color_border(mut grid: Vec<Vec<i32>>, row: i32, col: i32, color: i32) -> Vec<Vec<i32>> {
        let mut q = VecDeque::new();
        q.push_back((row as usize, col as usize));
        let mut visited = vec![vec![false; grid[0].len()]; grid.len()];
        visited[row as usize][col as usize] = true;
        let src_color = grid[row as usize][col as usize];
        let mut need_change = Vec::new();
        while let Some((r, c)) = q.pop_front() {
            // 首先我们检查这个点是否是边界, 如果是, 我们就将其染色
            if r == 0 || c == 0 || r == grid.len()-1 || c == grid[r].len() - 1 || grid[r-1][c] != src_color ||
            grid[r+1][c] != src_color || grid[r][c-1] != src_color || grid[r][c+1] != src_color {
                need_change.push((r, c));
            }
            // 然后我们考察后面四个方向
            if r - 1 < grid.len() && !visited[r-1][c] && grid[r-1][c] == src_color {
                visited[r-1][c] = true;
                q.push_back((r-1, c));
            }
            if r + 1 < grid.len() && !visited[r+1][c] && grid[r+1][c] == src_color {
                visited[r+1][c] = true;
                q.push_back((r+1, c));
            }
            if c - 1 < grid[r].len() && !visited[r][c-1] && grid[r][c-1] == src_color {
                visited[r][c-1] = true;
                q.push_back((r, c-1));
            }
            if c + 1 < grid[r].len() && !visited[r][c+1] && grid[r][c+1] == src_color {
                visited[r][c+1] = true;
                q.push_back((r, c+1));
            }
        }
        need_change.drain(..).for_each(|(r, c)| grid[r][c] = color);
        grid
    }
}
// @lc code=end

