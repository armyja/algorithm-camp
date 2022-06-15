/*
 * @lc app=leetcode.cn id=332 lang=rust
 *
 * [332] 重新安排行程
 */
struct Solution{}
// 一笔画的最后一划一定是死胡同。
// 因为无论从哪个点开始递归，一定是进入到”死胡同“后无其他路径可走，开始返回。
// dfs函数内，while循环结束后（既无其他递归可以调用）再将当前节点加入结果集保证了”死胡同”一定是第一个进入结果集的节点。
// 对于其他节点，都是偶数出入度的节点，你随便怎么拆边总是能都拆完。
//（但在这个题中，heap保证了拆边的字典顺序）。

// @lc code=start
use std::collections::HashMap;
impl Solution {
    pub fn find_itinerary(tickets: Vec<Vec<String>>) -> Vec<String> {
        let mut d: HashMap<_, Vec<_>> = HashMap::new();
        for t in &tickets {
            d.entry(t[0].clone()).or_default().push(t[1].clone());
        }
        for (_, f) in d.iter_mut() {
            f.sort_by(|a, b| b.cmp(a));
        }
        let mut ans = vec![];
        fn dfs(f: String, d: &mut HashMap<String, Vec<String>>, ans: &mut Vec<String>) {
            while let Some(df) = d.get_mut(&f).unwrap_or(&mut vec![]).pop() {
                dfs(df, d, ans)
            }
            ans.push(f);
        }
        dfs("JFK".to_string(), &mut d, &mut ans);
        ans.reverse();
        ans
    }
}
// @lc code=end
