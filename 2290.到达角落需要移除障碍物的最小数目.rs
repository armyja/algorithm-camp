/*
 * @lc app=leetcode.cn id=2290 lang=rust
 *
 * [2290] 到达角落需要移除障碍物的最小数目
 */
struct Solution {}
// @lc code=start
use std::collections::VecDeque;
impl Solution {
    pub fn minimum_obstacles(grid: Vec<Vec<i32>>) -> i32 {
        let dirs = [0, 1, 0, -1, 0];
        let m = grid.len();
        let n = grid[0].len();
        let mut dis = vec![vec![i32::MAX; n]; m];
        dis[0][0] = 0;
        let mut queue = VecDeque::new();
        queue.push_front((0usize, 0usize));
        while !queue.is_empty() {
            let (x, y) = queue.pop_front().unwrap();
            for i in 0..4 {
                let nx: i32 = x as i32 + dirs[i];
                let ny: i32 = y as i32 + dirs[i + 1];
                if nx < 0 || nx >= (m as i32) || ny < 0 || ny >= (n as i32) {
                    continue;
                }
                let nx = nx as usize;
                let ny = ny as usize;
                let g = grid[nx][ny];
                if dis[x][y] + g < dis[nx][ny] {
                    dis[nx][ny] = dis[x][y] + g;
                    if g == 0 {
                        queue.push_front((nx, ny))
                    } else {
                        queue.push_back((nx, ny));
                    }
                }
            }
        }
        dis[m - 1][n - 1]
    }
}
// @lc code=end
