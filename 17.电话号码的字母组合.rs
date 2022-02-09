/*
 * @lc app=leetcode.cn id=17 lang=rust
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
use std::collections::HashMap;
impl Solution {
    pub fn letter_combinations(digits: String) -> Vec<String> {
        let map = hashmap! {
            b'2' => "abc",
            b'3' => "def",
            b'4' => "ghi",
            b'5' => "jkl",
            b'6' => "mno",
            b'7' => "pqrs",
            b'8' => "tuv",
            b'9' => "wxyz"
        };

        let mut res = vec![];
        recursive(&digits, &mut res, &mut vec![], &map);
        res
    }
}

fn recursive<'a>(
    s: &str,
    res: &mut Vec<String>,
    buf: &mut Vec<&'a str>,
    map: &'a HashMap<u8, &str>,
) {
    let current = match s.as_bytes().first() {
        Some(it) => it,
        _ => {
            if !buf.is_empty() {
                res.push(buf.iter().map(|&s| s).collect());
            }
            return;
        }
    };

    let mapping = map[current];
    for i in 0..mapping.len() {
        buf.push(&mapping[i..=i]);
        recursive(&s[1..], res, buf, map);
        buf.pop();
    }
}

#[macro_export]
macro_rules! hashmap {
    ( $( $key:expr => $val:expr ),* ) => {
        {
            let mut map = std::collections::HashMap::new();
            $( map.insert( $key, $val ); )*
            map
        }
    };
}
// @lc code=end

