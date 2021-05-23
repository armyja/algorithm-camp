/*

26. 给小区建牛奶站
使用二维表格表示小区，每个格子可以是 0，1，2，其中 2 表示小区绿化区，1 表示房子，0 表示是空地。

现在需要在小区中建立一个牛奶站方便供应鲜奶，请设计帮忙找到让所有房子到牛奶站的距离和最小，如果没有地方搭建，返回 -1。
注意：小区的绿化区不可踩踏，房子也不可以随意穿过，牛奶站只可建在空地。

示例：
二维格子如下：
[
[0,1,2,2,2],
[1,0,0,2,2],
[0,1,0,0,1]
]
返回：7
当牛奶站建在 (1,1) 位置时候，各居民到牛奶站的距离和最小。

*/

/**
 * input: number[][]
 * output: number
 */
function shortestDistance(grid) {
    // 找出所有的1，能走到所有1的位置。
    let res = [0, -1];
    let count = 0;
    let m = grid.length;
    let n = grid[0].length;
    let sumBoard = Array(m).fill(null).map(s => Array(n).fill(null).map(s => []));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                count++;
                grid[i][j] = 0;
                res = update(grid, i, j, sumBoard, 0, count, res);
                grid[i][j] = 1;
            }
        }
    }
    return res[0] === count ? res[1] : -1;
}

function update(grid, x, y, sumBoard, length, count, res) {
    const val = grid[x][y];
    if (val !== 0) {
        return res;
    }

    grid[x][y] = -1; // visited
    if (length > 0) {

        if (count === sumBoard[x][y].length) {
            if (sumBoard[x][y][count - 1] > length) {
                sumBoard[x][y][count - 1] = length;
            }
        } else {
            sumBoard[x][y].push(length);
            if (count > res[0]) {
                res = [count, sumBoard[x][y].reduce((x, y) => x + y)];
            }
        }
        res[1] = Math.min(res[1], sumBoard[x][y].reduce((x, y) => x + y));
    }
    // go to next step
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for (let d of directions) {
        let [newX, newY] = [x + d[0], y + d[1]];
        if (newX < 0 || newY < 0 || newX >= grid.length || newY >= grid[newX].length) {
            continue;
        }
        if (grid[newX][newY] === 0) {
            res = update(grid, newX, newY, sumBoard, length + 1, count, res);
        }
    }

    grid[x][y] = val; // roll back
    return res;
}
shortestDistance(
    [
        [0, 1, 2, 2, 2],
        [1, 0, 0, 2, 2],
        [0, 1, 0, 0, 1]
    ]
) === 7;

shortestDistance(
    [[2, 1, 2], [1, 1, 1]]
) === -1;