/*
 * @lc app=leetcode.cn id=2049 lang=rust
 *
 * [2049] 统计最高分的节点数目
 */
struct Solution {}
// @lc code=start
impl Solution {
    pub fn count_highest_score_nodes(parents: Vec<i32>) -> i32 {
        let n = parents.len();
        // 这里默认 usize 类型为 64 位，32 位存储一个子节点。
        let (mut children, mut record) = (vec![0 as usize; n], vec![0 as usize; n]);
        (1..n).for_each(|idx| {
            children[parents[idx] as usize] = idx | (children[parents[idx] as usize] << 32)
        });
        fn dfs(children: &Vec<usize>, record: &mut Vec<usize>, parent_idx: usize) -> usize {
            // 空节点无子节点，不计算
            if parent_idx == usize::MAX {
                return 0;
            }
            // 叶子节点，只删除自身，剩下1棵树
            if children[parent_idx] == 0 {
                record[parent_idx] = children.len() - 1;
                return 1;
            }
            // 非叶子节点，取小端为左节点。
            let (left_idx, mut right_idx) = (
                children[parent_idx] & (i32::MAX as usize),
                children[parent_idx] >> 32,
            );
            // 右节点不存在，则置空。
            if right_idx == 0 {
                right_idx = usize::MAX;
            }
            let (left_cnt, right_cnt) = (
                dfs(children, record, left_idx),
                dfs(children, record, right_idx),
            );
            let leftover = children.len() - 1 - left_cnt - right_cnt;
            record[parent_idx] = leftover.max(1) * left_cnt.max(1) * right_cnt.max(1);
            left_cnt + right_cnt + 1
        }
        dfs(&children, &mut record, 0);
        let max_score = record.iter().max().unwrap().clone();
        record.iter().filter(|&x| *x == max_score).count() as i32
    }
}
// @lc code=end
