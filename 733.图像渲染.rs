/*
 * @lc app=leetcode.cn id=733 lang=rust
 *
 * [733] 图像渲染
 */
struct Solution {}
// @lc code=start
impl Solution {
    pub fn flood_fill(mut image: Vec<Vec<i32>>, sr: i32, sc: i32, new_color: i32) -> Vec<Vec<i32>> {
        let r = sr as usize;
        let c = sc as usize;
        if image[r][c] == new_color {
            return image;
        }
        let mut stk = vec![];
        let old_color = image[r][c];
        image[r][c] = new_color;
        stk.push((r, c));
        while !stk.is_empty() {
            let (r, c) = stk.pop().unwrap();
            // 这里不会产生负数吗？
            for (i, j) in [(r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1)] {
                if i < image.len() && j < image[0].len() && image[i][j] == old_color {
                    image[i][j] = new_color;
                    stk.push((i, j))
                }
            }
        }
        image
    }
}
// @lc code=end
