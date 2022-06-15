/*
 * @lc app=leetcode.cn id=1340 lang=rust
 *
 * [1340] 跳跃游戏 V
 */
struct Solution {}
// @lc code=start
impl Solution {
    fn dfs(arr: &Vec<i32>, f: &mut Vec<i32>, id: usize, d: usize, n: usize) {
        if f[id] != -1 {
            return;
        }
        f[id] = 1;
        for i in (0..id).rev() {
            if id - i > d || arr[id] <= arr[i] {
                break;
            }
            Self::dfs(arr, f, i, d, n);
            f[id] = std::cmp::max(f[id], f[i] + 1);
        }

        for i in (id + 1)..n {
            if i - id > d || arr[id] <= arr[i]  {
                break;
            }
            Self::dfs(arr, f, i, d, n);
            f[id] = std::cmp::max(f[id], f[i] + 1);
        }
    }
    pub fn max_jumps(arr: Vec<i32>, d: i32) -> i32 {
        let n = arr.len();
        let mut f = vec![-1; n];
        for i in 0..n {
            Self::dfs(&arr, &mut f, i, d as usize, n);
        }
        f.iter().max().unwrap().clone()
    }
}
// @lc code=end
