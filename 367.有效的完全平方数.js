/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
// var isPerfectSquare = function(num) {
//     let prev = num;
//     while (true) {
//         let curr = prev - (prev * prev - num) / (2 * prev);
//         if (prev - curr < 0.1) {
//             break;
//         }
//         prev = curr;
//     }
//     prev = Math.floor(prev);
//     return num === prev * prev;
// };
// @lc code=end

var isPerfectSquare = function(num) {
    let prev = num;
    let curr = num;
    do {
        prev = curr;
        
        //  x - (x * x - num) / (2 * x)
        curr = prev / 2 + num / (2 * prev);
    } while (prev - curr > 0.1);
    curr = Math.floor(prev);
    return curr * curr === num;
};
isPerfectSquare(16);