use std::task::Wake;

/*
 * @lc app=leetcode.cn id=2257 lang=rust
 *
 * [2257] 统计网格图中没有被保卫的格子数
 */
struct Solution {}
// @lc code=start
impl Solution {
    pub fn count_unguarded(m: i32, n: i32, guards: Vec<Vec<i32>>, walls: Vec<Vec<i32>>) -> i32 {
        let mut grid: Vec<Vec<u16>> = vec![vec![0; n as usize]; m as usize];
        for guard in guards.iter() {
            grid[guard[0] as usize][guard[1] as usize] = 2;
        }
        for wall in walls.iter() {
            grid[wall[0] as usize][wall[1] as usize] = 2;
        }
        for guard in guards.iter() {
            let x = guard[0] as usize;
            let y = guard[1] as usize;
            for nx in (0..x).rev() {
                if grid[nx][y] == 2 {
                    break;
                }
                grid[nx][y] = 1;
            }
            for nx in x + 1..m as usize {
                if grid[nx][y] == 2 {
                    break;
                }
                grid[nx][y] = 1;
            }
            for ny in (0..y).rev() {
                if grid[x][ny] == 2 {
                    break;
                }
                grid[x][ny] = 1;
            }
            for ny in y + 1..n as usize {
                if grid[x][ny] == 2 {
                    break;
                }
                grid[x][ny] = 1;
            }
        }
        let mut res = 0;
        for i in 0..m as usize {
            for j in 0..n as usize {
                if grid[i][j] == 0 {
                    res += 1
                }
            }
        }
        res
    }
}
// @lc code=end
