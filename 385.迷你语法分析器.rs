/*
 * @lc app=leetcode.cn id=385 lang=rust
 *
 * [385] 迷你语法分析器
 */

// @lc code=start
// #[derive(Debug, PartialEq, Eq)]
// pub enum NestedInteger {
//   Int(i32),
//   List(Vec<NestedInteger>)
// }
impl Solution {
    pub fn deserialize(s: String) -> NestedInteger {
        if !s.starts_with('[') {
            let num = s.parse::<i32>().unwrap();
            return NestedInteger::Int(num);
        }

        let mut index = 1;
        let mut items = Vec::new();
        let data = s.chars().collect::<Vec<_>>();

        while index < data.len() - 1 {
            if data[index] == ',' {
                index += 1;
                continue;
            }

            let mut offset = 0;

            if data[index] == '[' {
                let mut left_count = 1;
                while index + offset < data.len() - 1 && left_count > 0 {
                    offset += 1;
                    if data[index + offset] == '[' {
                        left_count += 1;
                    }
                    if data[index + offset] == ']' {
                        left_count -= 1;
                    }
                }
                items.push(&s[index..index + offset + 1]);
            } else {
                while index + offset < data.len() - 1 && data[index + offset] != ',' {
                    offset += 1;
                }
                items.push(&s[index..index + offset]);
            }
            index += offset;
            index += 1;
        }
        let mut res = vec![];
        for item in items {
            res.push(Solution::deserialize(String::from(item)));
        }
        NestedInteger::List(res)
    }
}
// @lc code=end
