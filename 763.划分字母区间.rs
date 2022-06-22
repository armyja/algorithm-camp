/*
 * @lc app=leetcode.cn id=763 lang=rust
 *
 * [763] 划分字母区间
 */
struct Solution;
// @lc code=start
impl Solution {
    pub fn partition_labels(s: String) -> Vec<i32> {
        let mut arr: [usize; 26] = [0_usize; 26];
        let mut res: Vec<i32> = vec![];
        let mut start: i32 = -1;
        let mut end: i32 = 0;
        for (i, ch) in s.char_indices() {
            arr[(ch as u8 - b'a') as usize] = i;
        }
        for (i, ch) in s.char_indices() {
            let n = arr[(ch as u8 - b'a') as usize] as i32;
            if n > end {
                end = n;
            }
            if i as i32 == end {
                res.push(end - start);
                start = i as i32;
            }
        }
        res
    }
}
// @lc code=end
