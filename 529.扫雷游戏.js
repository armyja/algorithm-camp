/*
 * @lc app=leetcode.cn id=529 lang=javascript
 *
 * [529] 扫雷游戏
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
    const rows = board.length;
    const cols = board[0].length;

    dfs(click[0], click[1]);
    
    return board;

    function dfs(x, y) {
        if (!board[x][y]) {
            return;
        }
        // meet bomb
        if (board[x][y] === 'M') {
            board[x][y] = 'X';
            return;
        }
        
        if (board[x][y] !== 'E') {
            return;
        }

        const mines = checkForMine(x, y);
        if (mines) {
            board[x][y] = mines.toString();
            return;
        }

        board[x][y] = 'B';
        for (let i = Math.max(x - 1, 0); i < Math.min(x + 2, rows); i++)  {
            for (let j = Math.max(y - 1, 0); j < Math.min(y + 2, cols); j++)  {
                dfs(i ,j);
            }
        }

    }

    function checkForMine(x, y) {
        let count = 0;
        for (let i = Math.max(x - 1, 0); i < Math.min(x + 2, rows); i++)  {
            for (let j = Math.max(y - 1, 0); j < Math.min(y + 2, cols); j++)  {
                if (board[i][j] === 'M') {
                    count++;
                }
            }
        }
        return count;
    }
}
// @lc code=end

var updateBoard = function(board, click) {
    
    update(click[0], click[1]);
    return board;

    function update(x, y) {
        if (!board[x][y]) {
            return;
        }
        const rows = board.length;
        const cols = board[x].length;
        if (board[x][y] === 'M') {
            board[x][y] = 'X';
            return;
        }
        if (board[x][y] !== 'E') {
            return;
        }
        const mines = checkMines(x, y);
        if (mines > 0) {
            board[x][y] = '' + mines;
            return;
        }
        board[x][y] = 'B';
        for (let i = Math.max(x - 1, 0); i < Math.min(x + 2, rows); i++) {
            for (let j = Math.max(y - 1, 0); i < Math.min(y + 2, cols); j++) {
                update(i, j);
            }
        }
    }
    
    function checkMines(x, y) {
        const rows = board.length;
        const cols = board[x].length;
        let mines = 0;
        for (let i = Math.max(x - 1, 0); i < Math.min(x + 2, rows); i++) {
            for (let j = Math.max(y - 1, 0); i < Math.min(y + 2, cols); j++) {
                if (board[x][y] === 'M') {
                    mines++;
                }
            }
        }
        return mines;
    }
};

let boards = updateBoard(
[["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]],
[3,0]
)
console.log(boards);