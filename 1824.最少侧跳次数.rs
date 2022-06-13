/*
 * @lc app=leetcode.cn id=1824 lang=rust
 *
 * [1824] 最少侧跳次数
 */
// 每当遇到障碍物，跳到距离下一个障碍物更远的跑道上，计数器加一。
// 如果暂时无法确定跳到哪一条跑道，两条都记录，碰到障碍时排除障碍所在赛道。
// @lc code=start
impl Solution {
    pub fn min_side_jumps(obstacles: Vec<i32>) -> i32 {
        let mut ret = 0;
        // 初始状态 010
        let mut state = 2;
        for i in 0..obstacles.len() {
            if obstacles[i] == 0 {
                continue;
            }

            // 只有一种可选道路并碰到障碍
            if 1 << (obstacles[i] - 1) == state {
                // 与二进制 111 异或，0 变 1，1 变 0
                state ^= 7;
                // 如果两侧有障碍
                if i > 0 && obstacles[i - 1] != 0 {
                    // 侧跳到不是障碍物的赛道
                    state &= 7 ^ (1 << (obstacles[i - 1] - 1));
                }
                ret += 1;
            } else {
                // 走没有障碍的另一条可选道路
                state &= !(1 << (obstacles[i] - 1));
            }
        }
        ret
    }
}
// @lc code=end
