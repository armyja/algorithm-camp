/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;

    let row = 0;
    let col = matrix[0].length - 1;
  
    while (col >= 0 && row <= matrix.length - 1) {
      if (matrix[row][col] === target) return true;
      else if (matrix[row][col] > target) col--;
      else if (matrix[row][col] < target) row++;
    }
  
    return false;
};
// @lc code=end

// binary search
var searchMatrix = function (matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let left = 0;
    let right = rows * cols - 1;

    while (left <= right) {
        const mid = Math.floor((right + left) / 2);
        const val = getVal(mid);
        if (val === target) {
            return true;
        } else if (val > target) {
            right = mid - 1;
        } else if (val < target) {
            left = mid + 1;
        }
    }
    return false;

    function getVal(index) {
        const y = index % cols;
        const x = (index - y) / cols;
        return matrix[x][y];
    }
};

// 右上到左下。先定位到行，然后左移。出界则未找到
var searchMatrix = function (matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;

    let row = 0;
    let col = matrix[0].length - 1;
  
    while (col >= 0 && row <= matrix.length - 1) {
      if (matrix[row][col] === target) return true;
      else if (matrix[row][col] > target) col--;
      else if (matrix[row][col] < target) row++;
    }
  
    return false;
};