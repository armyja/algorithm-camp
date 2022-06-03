/*
 * @lc app=leetcode.cn id=354 lang=rust
 *
 * [354] 俄罗斯套娃信封问题
 */
/// ## 基于二分查找的动态规划
/// 优先按w正序，其次按y倒序
/// 对于相同的w，至多使结果长度增加1。
// @lc code=start
impl Solution {
    pub fn max_envelopes(envelopes: Vec<Vec<i32>>) -> i32 {
        let mut envelopes = envelopes;
        envelopes.sort_unstable_by(|a, b| a[0].cmp(&b[0]).then(b[1].cmp(&a[1])));
        let mut sub = vec![];
        for envelope in envelopes {
            let (_, h) = (envelope[0], envelope[1]);
            let i = sub.binary_search(&h);
            let i = match i {
                Ok(i) => i,
                Err(i) => i,
            };
            if i == sub.len() {
                sub.push(h);
            } else  {
                sub[i] = h;
            }
        }
        sub.len() as i32
    }
}
// @lc code=end

