/*
 * @lc app=leetcode.cn id=714 lang=rust
 *
 * [714] 买卖股票的最佳时机含手续费
 */
struct Solution{}
// @lc code=start
impl Solution {
    pub fn max_profit(prices: Vec<i32>, fee: i32) -> i32 {
        // 最后一次操作为 sell
        let mut sell = 0;
        // 最后一次操作为 buy
        let mut buy = -prices[0];
        for price  in prices.into_iter().skip(1) {
            sell = std::cmp::max(sell, buy + price - fee);
            // 不可能出现同一天卖出又买入的情况（会扣税），所以可以拆成两行写
            buy = std::cmp::max(buy, sell - price)
        }
        sell
    }
}
// @lc code=end

