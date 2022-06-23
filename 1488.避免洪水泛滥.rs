/*
 * @lc app=leetcode.cn id=1488 lang=rust
 *
 * [1488] 避免洪水泛滥
 */
struct Solution{}
// @lc code=start
use std::collections::HashMap;
impl Solution {
    pub fn avoid_flood(rains: Vec<i32>) -> Vec<i32> {
        fn find(fa: &mut Vec<i32>, i: usize) -> i32 {
            if fa[i] == i as i32 {
                return fa[i];
            }
            fa[i] = find(fa, fa[i] as usize);
            fa[i]
        }
        let n = rains.len();
        let mut fa = vec![0;n];
        let mut idx = vec![0;n];
        let mut occur:HashMap<&i32, usize> = HashMap::new();
        let mut res = vec![1;n];
        for i in 0..n {
            if rains[i] > 0 {
                if i > 0 && rains[i - 1] > 0 {
                    fa[i] = fa[i - 1];
                } else {
                    fa[i] = i as i32;
                    idx[i] = 1000000;
                }
                if occur.contains_key(&rains[i]) {
                    let last = occur[&rains[i]];
                    let f = find(&mut fa, last) as usize;
                    if idx[f] >= i {
                        return vec![];
                    }
                    res[idx[f] as usize] = rains[i];
                    idx[f] += 1;
                    if idx[f] < n && rains[idx[f]] > 0 {
                        fa[f] = find(&mut fa, idx[f]);
                    }
                }
                occur.insert(&rains[i], i);
                res[i] = -1;
            } else if i > 0 && rains[i - 1] > 0 {
                idx[find(&mut fa, i - 1) as usize] = i;
            }
        }
        res
    }
}
// @lc code=end

