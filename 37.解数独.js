/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = (board) => {
    X.fill(0);
    Y.fill(0);
    Z.fill(0);
    initBoard(board);
    solve(board, 0, 0);
}

const X = Array(9).fill(0);
const Y = Array(9).fill(0);
const Z = Array(9).fill(0);

function initBoard(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === ".") {
                continue;
            } else {
                setCheck(board[i][j] - "0", i, j);
            }
        }
    }
}

function setCheck(num, x, y) {
    X[x] ^= (1 << num);
    Y[y] ^= (1 << num);
    Z[Math.floor(x / 3) * 3 + Math.floor(y / 3)] ^= (1 << num); 
}

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

function nextX(x, y) {
    if (y === 8) {
        x++;
    }
    return x;
}

function nextY(y) {
    if (y === 8) {
        y = 0;
    } else {
        y++;
    }
    return y;
}

function solve(board, x, y) {
    if (x === 9) {
        return true;
    }
    if (board[x][y] !== '.') return solve(board, nextX(x,y), nextY(y));
    for (let i = 1; i <= 9; i++) {
        if (!check(i, x, y)) {
            continue;
        }
        board[x][y] = i + "";
        setCheck(i, x, y);
        if (solve(board, nextX(x, y), nextY(y))) {
            return true;
        }
        board[x][y] = ".";
        setCheck(i, x, y);
    }
    return false;
}
// @lc code=end

