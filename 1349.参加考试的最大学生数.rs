/*
 * @lc app=leetcode.cn id=1349 lang=rust
 *
 * [1349] 参加考试的最大学生数
 */
struct Solution {}
// @lc code=start
impl Solution {
    fn f(
        memory: &mut [[i32; 256]; 8],
        compressed_seats: &mut Vec<usize>,
        X: usize,
        row_num: usize,
        width: usize,
    ) -> i32 {
        if memory[row_num][X] != -1 {
            return memory[row_num][X];
        }
        let mut ans = 0;
        for scheme in 0..(1 << width) {
            if scheme & !X != 0 || scheme & (scheme << 1) != 0 {
                continue;
            }
            let mut curans = 0;
            for j in 0..width {
                if (1 << j) & scheme != 0 {
                    curans += 1;
                }
            }
            if row_num == compressed_seats.len() - 1 {
                ans = std::cmp::max(ans, curans);
            } else {
                let mut next_seats = compressed_seats[row_num + 1];
                next_seats &= !(scheme << 1);
                next_seats &= !(scheme >> 1);
                ans = std::cmp::max(
                    ans,
                    curans + Self::f(memory, compressed_seats, next_seats, row_num + 1, width),
                );
            }
        }
        memory[row_num][X] = ans;
        ans
    }
    fn compress(row: &Vec<char>) -> usize {
        let mut ans = 0;
        for c in row {
            ans <<= 1;
            if *c == '.' {
                ans += 1;
            }
        }
        ans
    }
    pub fn max_students(seats: Vec<Vec<char>>) -> i32 {
        let mut memory = [[-1; 1 << 8]; 8];
        let mut compressed_seats: Vec<usize> = vec![];
        for row in seats.iter() {
            compressed_seats.push(Self::compress(row));
        }
        let X = compressed_seats[0];
        Self::f(&mut memory, &mut compressed_seats, X, 0, seats[0].len())
    }
}
// @lc code=end
