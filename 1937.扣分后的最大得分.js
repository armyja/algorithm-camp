/*
 * @lc app=leetcode.cn id=1937 lang=javascript
 *
 * [1937] 扣分后的最大得分
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let m = points.length;
    let n = points[0].length;
    let dp = new Array(n).fill(0);
    
    // 一开始，同位置时，最大值是上一行的值。
    // 偏移时，马上确定当前列的最大值。且其中一个比较数是可以随位移变小的，像梦琪一样。
    for (let r = 0; r < m; r++) {
        let cur = new Array(n);
        let lmax = 0;
        // 从左向右遍历，以最大值位置向右递减，与本身的值比较替换为较大值
        for (let c = 0; c < n; c++) {
            lmax = Math.max(lmax - 1, dp[c]);
            cur[c] = lmax;
        }
        
        let rmax = 0;
        // 从右向左遍历，以最大值位置向左递减，与本身的值比较替换为较大值
        for (let c = n - 1; c >= 0; c--) {
            rmax = Math.max(rmax - 1, dp[c]);
            cur[c] = Math.max(cur[c], rmax);
        }
        // 然后与当前行的值相加（同列相加）
        for (let c = 0; c < n; c++) {
            dp[c] = cur[c] + points[r][c];
        }
    }
    
    return Math.max(...dp);
}
// @lc code=end

