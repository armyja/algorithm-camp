/*
 * @lc app=leetcode.cn id=22 lang=rust
 *
 * [22] 括号生成
 */

struct Solution {}

// @lc code=start
impl Solution {
    pub fn generate_parenthesis(n: i32) -> Vec<String> {
        let mut res = vec![];
        let mut str = String::new();
        fn go(res: &mut Vec<String>, str: &mut String, left_remain: i32, right_remain: i32) {
            if left_remain > right_remain {
                return;
            }
            if left_remain + right_remain == 0 {
                res.push(str.clone());
                return;
            }
            if left_remain > 0 {
                str.push('(');
                go(res, left_remain - 1, right_remain, str);
                str.pop();
            }
            if right_remain > 0 {
                str.push(')');
                go(res, left_remain, right_remain - 1, str);
                str.pop();
            }
        }
        go(&mut res, &mut str, n, n);
        res
    }
}

// @lc code=end
