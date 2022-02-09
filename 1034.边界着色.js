/*
 * @lc app=leetcode.cn id=1034 lang=javascript
 *
 * [1034] 边界着色
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
 var colorBorder = function(grid, row, col, color) {
    let originColor = grid[row][col];
    if (originColor === color)  {
        return grid;
    }
    let cloneGride = JSON.parse(JSON.stringify(grid));
    let _y = grid.length-1;
    let _x = grid[0].length-1;
    let dfs = function(y, x) {
        if (grid[y][x] !== originColor) return;
        grid[y][x] *= -1;
        if (!(x !== 0 && x !== _x && y !== 0 && y !== _y && 
            Math.abs(grid[y-1][x]) === originColor && 
            Math.abs(grid[y+1][x]) === originColor && 
            Math.abs(grid[y][x-1]) === originColor && 
            Math.abs(grid[y][x+1]) === originColor) 
        ) {
        cloneGride[y][x] = color;
        }
        if (y > 0) dfs(y-1, x);
        if (x > 0) dfs(y, x-1);
        if (x < _x) dfs(y, x+1);
        if (y < _y) dfs(y+1, x);
    }
    dfs(row, col);
    return cloneGride;
};
// @lc code=end

// 常规的思路是可以使用深度优先搜索或者广度优先搜索来寻找出位置 (\textit{row},\textit{col})(row,col) 的所在的连通分量，额外要做的是搜索的时候需要判断当前的点是否属于边界。如果属于边界，需要把该点加入到一个用来存所有边界点的数组中。当搜索完毕后，再将所有边界点的进行着色。

