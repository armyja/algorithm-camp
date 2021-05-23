/*
 * @lc app=leetcode.cn id=1091 lang=javascript
 *
 * [1091] 二进制矩阵中的最短路径
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    const n = grid.length;
    if (grid[0][0] !== 0 || grid[n - 1][n - 1] !== 0) {
        return -1;
    }

    const directX = [0, 1, 1, 1, 0, -1, -1, -1];
    const directY = [1, 1, 0, -1, -1, -1, 0, 1];

    let queue = [[0, 0]];
    let count = 1;
    let length = queue.length;
    while (length) {
        while (length--) {
            const [i, j] = queue.shift();
            if (i === n - 1 && j === n - 1) {
                return count;
            }

            for (let k = 0; k < 8; k++) {
                const x = i + directX[k];
                const y = j + directY[k];
                if (x < 0 || y < 0 || x >= n || y >= n || grid[x][y] === 1) {
                    continue;
                }
                queue.push([x, y]);
                grid[x][y] = 1;
            }
        }
        count++;
        length = queue.length;
    }
    return -1;
};
