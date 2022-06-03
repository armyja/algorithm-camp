/*
 * @lc app=leetcode.cn id=2288 lang=rust
 *
 * [2288] 价格减免
 */
struct Solution {}
// @lc code=start
impl Solution {
    pub fn discount_prices(sentence: String, discount: i32) -> String {
        let ratio = (100 - discount) as f64 / 100f64;
        let vec = sentence
            .split_ascii_whitespace()
            .map(|s| {
                if !s.starts_with('$') {
                    return s.to_string()
                }
                if let Ok(v) = s[1..].parse::<i64>() {
                    String::from(format!("${:.2}", v as f64 * ratio))
                } else {
                    s.to_string()
                }
            })
            .collect::<Vec<String>>();
        vec.join(" ")
    }
}
// @lc code=end
