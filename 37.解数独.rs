/*
 * @lc app=leetcode.cn id=37 lang=rust
 *
 * [37] 解数独
 */

// @lc code=start
impl Solution {
    pub fn solve_sudoku(board: &mut Vec<Vec<char>>) {
        let mut c = [[false; 9]; 9];
        let mut h = [[false; 9]; 9];
        let mut v = [[false; 9]; 9];
        for y in 0..9 {
            for x in 0..9 {
                if let Some(n) = board[y][x].to_digit(10) {
                    let p = (n - 1) as usize;
                    let sub_board = y / 3 * 3 + x / 3;
                    c[sub_board][p] = true;
                    h[y][p] = true;
                    v[x][p] = true;
                }
            }
        }
        Solution::fill(board, 0, 0, &mut c, &mut h, &mut v);
    }

    pub fn fill(
        board: &mut Vec<Vec<char>>,
        mut x: usize,
        mut y: usize,
        c: &mut [[bool; 9]; 9],
        h: &mut [[bool; 9]; 9],
        v: &mut [[bool; 9]; 9],
    ) -> bool {
        while board[y][x] != '.' {
            if x == 8 {
                if y == 8 {
                    return true;
                }
                y += 1;
                x = 0;
            } else {
                x += 1;
            }
        }
        if board[y][x] == '.' {
            let sub_board = y / 3 * 3 + x / 3;
            for num in 0..9 {
                if !c[sub_board][num] && !h[y][num] && !v[x][num] {
                    board[y][x] = char::from_digit(num as u32 + 1, 10).unwrap();
                    c[sub_board][num] = true;
                    h[y][num] = true;
                    v[x][num] = true;
                    if Solution::fill(board, x, y, c, h, v) {
                        return true;
                    }
                    board[y][x] = '.';
                    c[sub_board][num] = false;
                    h[y][num] = false;
                    v[x][num] = false;
                }
            }
        }

        false
    }
}
// @lc code=end

