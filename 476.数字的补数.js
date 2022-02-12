/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
 var findComplement = function(num) {
    return (1 << (32 - Math.clz32(num))) - 1 - num;
}
// var findComplement = function(num) {
//     let tmp = num;
//     let i = 0;
//     const arr = [];
//     do {
//         i = tmp & 1;
//         tmp = tmp >> 1;
//         arr.unshift(i);
//     } while (tmp !== 0);
//     let ret = 0;
//     for (let i = 0; i < arr.length; i++) {
//         ret = ret << 1;
//         ret += (1 - arr[i]);
//     }
//     return ret;
// };
// @lc code=end

// var findComplement = function(num) {
//   return parseInt(num.toString(2).split('').map(item => Number(!Number(item))).join(''), 2)
// };

var findComplement = function(num) {
    return 1 << (32 - Math.clz32(num)) - 1 - num;
}