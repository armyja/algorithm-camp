/*
 * @lc app=leetcode.cn id=1328 lang=javascript
 *
 * [1328] 破坏回文串
 */

// @lc code=start
/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function (palindrome) {
  let n = palindrome.length;
  // 任意长度为 1 的字符串一定是回文串，所以无论如果替换都是回文串
  if (n < 2) return "";
  // 只需要替换任意一个不在对称中心位置上的字符
  let half = n >> 1;
  let arr = palindrome.split("");
  for (let i = 0; i < half; i++) {
    // 从前往后替换才能保证字典序最小
    if (arr[i] != "a") {
      arr[i] = "a";
      return arr.join("");
    }
  }
  // 当所有的字符都变成了a了，这时最小的字典库就是把最后一个变成b
  arr[n - 1] = "b";
  return arr.join("");
};
// @lc code=end
