/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    X.fill(0);
    Y.fill(0);
    Z.fill(0);
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            if (board[x][y] === ".") {
                continue;
            }
            if (!check(board[x][y] - "0", x, y)) {
                return false;
            }
            setCheck(board[x][y] - "0", x, y);
        }
    }
    return true;
};

function check(num, x, y) {
    if (X[x] & (1 << num)) {
        return false;
    }
    if (Y[y] & (1 << num)) {
        return false;
    }

    if (Z[Math.floor(x / 3) * 3 + Math.floor(y / 3)] & (1 << num)) {
        return false;
    }
    return true;
}

function setCheck(num, x, y) {
    X[x] ^= (1 << num);
    Y[y] ^= (1 << num);
    Z[Math.floor(x / 3) * 3 + Math.floor(y / 3)] ^= (1 << num);
}


const N = 9;
const X = Array(N).fill(0);
const Y = Array(N).fill(0);
const Z = Array(N).fill(0);
// @lc code=end


let res = isValidSudoku([[".","8","7","6","5","4","3","2","1"],["2",".",".",".",".",".",".",".","."],["3",".",".",".",".",".",".",".","."],["4",".",".",".",".",".",".",".","."],["5",".",".",".",".",".",".",".","."],["6",".",".",".",".",".",".",".","."],["7",".",".",".",".",".",".",".","."],["8",".",".",".",".",".",".",".","."],["9",".",".",".",".",".",".",".","."]])
console.log(res);