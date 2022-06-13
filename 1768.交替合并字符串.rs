/*
 * @lc app=leetcode.cn id=1768 lang=rust
 *
 * [1768] 交替合并字符串
 */
struct Solution {}
// @lc code=start
impl Solution {
    pub fn merge_alternately(word1: String, word2: String) -> String {
        let mut ret = String::with_capacity(word1.len() + word2.len());

        for (k1, k2) in word1.bytes().zip(word2.bytes()) {
            ret.push(k1 as char);
            ret.push(k2 as char);
        }

        use std::cmp::Ordering;
        let remain_str = match word1.len().cmp(&word2.len()) {
            Ordering::Less => &word2[word1.len()..],
            Ordering::Equal => "",
            Ordering::Greater => &word1[word2.len()..],
        };

        ret.push_str(remain_str);

        ret
    }
}
// @lc code=end
/*
impl Solution {
    pub fn merge_alternately(word1: String, word2: String) -> String {
        let len1 = word1.len();
        let len2 = word2.len();
        let mut res = String::with_capacity(len1+len2);

        let w1 = word1.chars().collect::<Vec<char>>();
        let w2 = word2.chars().collect::<Vec<char>>();
        let mut i = 0;
        while i<len1 && i<len2{
            res.push(w1[i]);
            res.push(w2[i]);
            i += 1;
        }
        if i==len1{
            res.push_str(&word2[i..len2]);
        }else{
            res.push_str(&word1[i..len1]);
        }
        res
    }
}
*/
