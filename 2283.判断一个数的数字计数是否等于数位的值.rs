/*
 * @lc app=leetcode.cn id=2283 lang=rust
 *
 * [2283] 判断一个数的数字计数是否等于数位的值
 */
struct Solution {}
// @lc code=start
impl Solution {
    pub fn digit_count(num: String) -> bool {
        let mut dict = [0;10];
        num.bytes().for_each(|c| dict[(c - b'0') as usize] += 1);
        num.char_indices().all(|(idx,ch)| (ch as u8 - b'0') as i32 == dict[idx])
    }
}
// @lc code=end
/*
impl Solution {
    pub fn digit_count(num: String) -> bool {
        let mut arr = [0_i32;10];
        let bytes = num.as_bytes();
        let mut res = true;
        for i in 0..bytes.len() {
            let ch = bytes[i];
            let digit = (ch - b'0') as usize;
            arr[i] += digit as i32;
            arr[digit] -= 1;
        }
        for i in arr.iter() {
            if *i != 0 {
                res = false;
                break;
            }
        }
        res
    }
}
 */
