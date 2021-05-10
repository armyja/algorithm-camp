/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                res++;
                dfs(grid, i, j);
            }
        }
    }

    function dfs(grid, x, y) {
        const xLen = grid.length;
        const yLen = grid[x].length;
        grid[x][y] = '2'; // visited
        if (x < xLen - 1 && grid[x + 1][y] === '1') {
            dfs(grid, x + 1, y);
        }
        if (y < yLen - 1 && grid[x][y + 1] === '1') {
            dfs(grid, x, y + 1);
        }
        if (x > 0 && grid[x - 1][y] === '1') {
            dfs(grid, x - 1, y);
        }
        if (y > 0 && grid[x][y - 1] === '1') {
            dfs(grid, x, y - 1);
        }
    }

    return res;
};
// @lc code=end

