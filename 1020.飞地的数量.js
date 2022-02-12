/*
 * @lc app=leetcode.cn id=1020 lang=javascript
 *
 * [1020] 飞地的数量
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const uf = new UnionFind(grid);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                const index = i * n + j;
                if (j + 1 < n && grid[i][j + 1] === 1) {
                    uf.union(index, index + 1);
                }
                if (i + 1 < m && grid[i + 1][j] === 1) {
                    uf.union(index, index + n);
                }
            }
        }
    }
    let enclaves = 0;
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (grid[i][j] === 1 && !uf.isOnEdge(i * n + j)) {
                enclaves++;
            }
        }
    }
    return enclaves;
}

class UnionFind {
    constructor(grid) {
        const m = grid.length;
        const n = grid[0].length;
        this.parent = new Array(m * n).fill(0);
        this.onEdge = new Array(m * n).fill(false);
        this.rank = new Array(m * n).fill(0);
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1) {
                    const idx = i * n + j;
                    this.parent[idx] = idx;
                    if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                        this.onEdge[idx] = true;
                    }
                }
            }
        }
    }

    find(i) {
        if (this.parent[i] !== i) {
            this.parent[i] = this.find(this.parent[i]);
        }
        return this.parent[i];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX === rootY) {
            return;
        }
        if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
            this.onEdge[rootX] |= this.onEdge[rootY];
        } else if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
            this.onEdge[rootY] |= this.onEdge[rootX];
        } else {
            this.parent[rootY] = rootX;
            this.onEdge[rootX] |= this.onEdge[rootY];
            // 这里权重为什么是平级的时候才加，加到 root 值较小的根节点上
            this.rank[rootX]++;
        }
    }

    isOnEdge(idx) {
        return this.onEdge[this.find(idx)];
    }
}
// @lc code=end

// 深度优先搜索

var numEnclaves = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
    const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];

    function dfs (row, col, grid) {
        if (row < 0 || row >= m || col < 0 || col >= n || visited[row][col] || grid[row][col] === 0) {
            return;
        }
        visited[row][col] = true;
        for (let dir of directions) {
            dfs(row + dir[0], col + dir[1], grid);
        }
    }

    for (let i = 0; i < m; i++) {
        dfs(i, 0, grid);
        dfs(i, n - 1, grid);
    }

    for (let i = 1; i < n - 1; i++) {
        dfs(0, i, grid);
        dfs(m - 1, i, grid);
    }

    let enclaves = 0;
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                enclaves++;
            }
        }
    }

    return enclaves;
};

// 广度优先搜索

var numEnclaves = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
    const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    const queue = [];

    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 1) {
            visited[i][0] = true;
            queue.push([i, 0]);
        }
        if (grid[i][n - 1] === 1) {
            visited[i][n - 1] = true;
            queue.push([i, n - 1]);
        }
    }
    
    for (let j = 1; j < n - 1; j++) {
        if (grid[0][j] === 1) {
            visited[0][j] = true;
            queue.push([0, j]);
        }
        if (grid[m - 1][j] === 1) {
            visited[m - 1][j] = true;
            queue.push([m - 1, j]);
        }
    }

    while (queue.length) {
        const loc = queue.shift();
        const x = loc[0];
        const y = loc[1];
        for (const dir of directions) {
            const nextX = x + dir[0];
            const nextY = y + dir[1];
            if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n
                && !visited[nextX][nextY] && grid[nextX][nextY] === 1) {
                visited[nextX][nextY] = true;
                queue.push([nextX, nextY]);
            }
        }
    }

    let enclaves = 0;
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                enclaves++;
            }
        }
    }

    return enclaves;
};

// 并查集

var numEnclaves = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const uf = new UnionFind(grid);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                const index = i * n + j;
                if (j + 1 < n && grid[i][j + 1] === 1) {
                    uf.union(index, index + 1);
                }
                if (i + 1 < m && grid[i + 1][j] === 1) {
                    uf.union(index, index + n);
                }
            }
        }
    }
    let enclaves = 0;
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (grid[i][j] === 1 && !uf.isOnEdge[i * n + j]) {
                enclaves++;
            }
        }
    }
    return enclaves;
}

class UnionFind {
    constructor(grid) {
        const m = grid.length;
        const n = grid[0].length;
        this.parent = new Array(m * n).fill(0);
        this.onEdge = new Array(m * n).fill(false);
        this.rank = new Array(m * n).fill(0);
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1) {
                    const idx = i * n + j;
                    this.parent[idx] = idx;
                    if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                        this.onEdge[idx] = true;
                    }
                }
            }
        }
    }

    find(i) {
        if (this.parent[i] !== i) {
            this.parent[i] = this.find(this.parent[i]);
        }
        return this.parent[i];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX === rootY) {
            return;
        }
        if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
            this.onEdge[rootX] |= this.onEdge[rootY];
        } else if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
            this.onEdge[rootY] |= this.onEdge[rootX];
        } else {
            this.parent[rootY] = rootX;
            this.onEdge[rootX] |= this.onEdge[rootY];
            this.rank[rootX]++;
        }
    }

    isOnEdge(idx) {
        return this.onEdge[this.find(idx)];
    }
}