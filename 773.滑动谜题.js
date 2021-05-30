/*
 * @lc app=leetcode.cn id=773 lang=javascript
 *
 * [773] 滑动谜题
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
    let m = 2, n = 3;
    let start = "";
    let target = '123450'

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            start += board[i][j];
        }
    }

    const neighbor = [
        [1, 3],
        [0, 4, 2],
        [1, 5],
        [0, 4],
        [3, 1, 5],
        [4, 2]
    ]

    let queue = [start];

    let visited = new Set();
    visited.add(start);

    let step = 0

    while (queue.length) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let cur = queue.shift();

            // 判断是否达到目标局面
            if (target === cur) {
                return step;
            }

            // 找到数字 0 的索引
            let index = 0
            for (; cur[index] != '0'; index++);

            for (let adj of neighbor[index]) {
                let newBoard = cur.split('');

                let temp = newBoard[adj];
                newBoard[adj] = newBoard[index];
                newBoard[index] = temp;

                // console.log(newBoard);

                newBoard = newBoard.join('')

                if (!visited.has(newBoard)) {
                    queue.push(newBoard);
                    visited.add(newBoard);
                }
            }
        }
        step++;
    }
    return -1;
}
// @lc code=end

