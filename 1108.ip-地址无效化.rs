/*
 * @lc app=leetcode.cn id=1108 lang=rust
 *
 * [1108] IP 地址无效化
 */
struct Solution {}

// @lc code=start
impl Solution {
    pub fn defang_i_paddr(address: String) -> String {
        address.replace(".", "[.]")
        // let v: Vec<&str> = address.split_terminator('.').collect();
        // v.join("[.]")
    }
}
// @lc code=end
