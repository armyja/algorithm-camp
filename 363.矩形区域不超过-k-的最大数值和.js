/*
 * @lc app=leetcode.cn id=363 lang=javascript
 *
 * [363] 矩形区域不超过 K 的最大数值和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var maxSumSubmatrix = function(matrix, k) {
    const R_NUM = matrix.length, C_NUM = matrix[0].length;
    let maxSum = -Infinity;
    
    for(let l = 0; l < R_NUM; l++) {
        const dp = Array(C_NUM).fill(0);
        
        for(let r = l; r < R_NUM; r++) {
            let sum = 0, max = -Infinity;
            
            for(let c = 0; c < C_NUM; c++) {
                // build running dp array
                dp[c] += matrix[r][c];
                
                // implement kadane's algorithm
                // if(sum < 0) sum = 0;
                sum = Math.max(sum + dp[c], dp[c]);
                max = Math.max(max, sum);
            }
            
            // if max <= k take kadane's algorithm
            if(max <= k) maxSum = Math.max(max, maxSum);
            else {
                // if max > k find the max subarray sum no larger than k
                max = -Infinity;

                for(let c = 0; c < C_NUM; c++) {
                    sum = 0;

                    for(let d = c; d < C_NUM; d++) {
                        sum += dp[d];
                        if(sum <= k) max = Math.max(sum, max);
                    }
                }
                maxSum = Math.max(max, maxSum);
            }
            if(maxSum === k) return k; // short circuit
        }
    }
    return maxSum;
};

// @lc code=end

var maxSumSubmatrix = function(matrix, k) {
    let m = matrix.length;
    let n = matrix[0].length;
    let maxSum = -Infinity;
    for (let i = 0; i < m; i++) {
        let dp = Array(n).fill(0);
        for (let j = i; j < m; j++) {
            let sum = 0;
            let max = -Infinity;
            for (let p = 0; p < n; p++) {
                dp[p] += matrix[j][p];
                if (sum < 0) {
                    sum = 0;
                }
                sum += dp[p];
                max = Math.max(max, sum);
            }
            if (max <= k) {
                maxSum = Math.max(maxSum, max);
            } else {
                max = -Infinity;
                for (let c = 0; c < m; c++) {
                    sum = 0;
                    for (let d = c; d < m; d++) {
                        sum += dp[d];
                        if (sum <= k) {
                            max = Math.max(max, sum);
                        }
                    }
                }
                maxSum = Math.max(maxSum, max);
            }
        }
        if (maxSum === k) {
            return k;
        }
    }
    return maxSum;
};

maxSumSubmatrix([[2,2,-1]], 3);