/*
 * @lc app=leetcode.cn id=273 lang=rust
 *
 * [273] 整数转换英文表示
 */

// @lc code=start
const BILLION: i32 = 1_000_000_000;
const MILLION: i32 = 1_000_000;
const THOUSAND: i32 = 1_000;
const SINGLES: [&str; 10] = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
const TEENS: [&str; 10] = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const TENS: [&str; 10] = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
impl Solution {
    pub fn number_to_words(mut num: i32) -> String {
        if num == 0 {
            return String::from("Zero");
        }
        let mut s = String::new();
        if num >= BILLION {
            s += &Solution::number_to_words(num / BILLION);
            s += " Billion ";
            num %= BILLION;
        }
        if num >= MILLION {
            s += &Solution::number_to_words(num / MILLION);
            s += " Million ";
            num %= MILLION;
        }
        if num >= THOUSAND {
            s += &Solution::number_to_words(num / THOUSAND);
            s += " Thousand ";
            num %= THOUSAND;
        }
        if (num >= 100) {
            s += SINGLES[num as usize / 100];
            s += " Hundred ";
            num %= 100;
        }
        if (num >= 10 && num < 20) {
            s += TEENS[num as usize - 10];
            return s.trim().to_string();
        }
        if (num >= 20) {
            s += TENS[num as usize / 10];
            s += " ";
            num %= 10;
        }
        if (num > 0) {
            s += SINGLES[num as usize];
        }
        s.trim().to_string()
    }
}
// @lc code=end

