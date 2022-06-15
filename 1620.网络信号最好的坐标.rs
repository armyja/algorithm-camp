/*
 * @lc app=leetcode.cn id=1620 lang=rust
 *
 * [1620] 网络信号最好的坐标
 */
struct Solution {}
// @lc code=start
impl Solution {
    pub fn best_coordinate(towers: Vec<Vec<i32>>, radius: i32) -> Vec<i32> {
        use std::cmp::max;
        let n = towers.len();
        let mut ans = [[0; 110]; 110];
        let mut res = (0, 0);
        let mut mx = 0;
        for t in towers.iter() {
            let x = t[0];
            let y = t[1];
            let q = t[2];
            for a in max(0, x - radius)..(x + radius + 1){
                for b in max(0, y - radius)..(y + radius + 1) {
                    let mut d: f64 = ((a - x) * (a - x) + (b - y) * (b - y)) as f64;
                    d = d.sqrt();
                    if d > radius as f64 {
                        continue;
                    }
                    let c: i32 = (q as f64 / (1_f64 + d)) as i32;
                    ans[a as usize][b as usize] += c;
                    if ans[a as usize][b as usize] > mx || (ans[a as usize][b as usize] == mx && (a, b) < res) {
                        mx = ans[a as usize][b as usize];
                        res = (a, b);
                    }
                }
            }
        }
        return vec![res.0, res.1];
    }
}
// @lc code=end
