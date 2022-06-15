/*
 * @lc app=leetcode.cn id=753 lang=rust
 *
 * [753] 破解保险箱
 */
struct Solution{}
// 从右至左。
// set 插入 10、11、01、00。
// 0 1 1 0 0
// @lc code=start
use std::collections::HashSet;
impl Solution {
    pub fn crack_safe(n: i32, k: i32) -> String {
        let mut string_vec: Vec<u8> = vec![];
        let highest = 10_i32.pow((n - 1) as u32);
        let mut seen = HashSet::new();
        fn dfs(str: &mut Vec<u8>, seen: &mut HashSet<i32>, k:i32, highest:i32, node:i32) {
            for x in 0..k {
                let nei = node * 10 + x;
                if !seen.contains(&nei) {
                    seen.insert(nei);
                    dfs(str, seen, k, highest, nei % highest);
                    str.push('0' as u8 +  x as u8);
                }
            }
        }
        dfs(&mut string_vec, &mut seen, k, highest, 0);
        for _ in 0..(n-1) {
            string_vec.push('0' as u8);
        }
        std::str::from_utf8(&string_vec).unwrap().to_string()
    }
}
// @lc code=end

