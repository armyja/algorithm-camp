/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    if (!s || !p) return [];
    if (s.length < p.length) return [];
    const sarr = new Array(26).fill(0);
    const parr = new Array(26).fill(0);
    for (let i=0; i<p.length; i++) {
        parr[p.charCodeAt(i) - 97]++;
    }
    const ret = [];
    for (let i=0; i<p.length-1; i++) {
        sarr[s.charCodeAt(i) - 97]++;
    }
    for (let i=p.length-1; i<s.length; i++) {
        sarr[s.charCodeAt(i) - 97]++;
        const start = i - p.length + 1;
        if (arraysEqual(sarr, parr)) {
            ret.push(start);
        }
        sarr[s.charCodeAt(start) - 97]--;
    }
    return ret;
};

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
// @lc code=end

