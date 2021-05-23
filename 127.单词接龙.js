/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */
// 这不是回溯法，这是广度优先搜索的一种策略，局部最优解，类似贪心算法。
// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) {
        return 0;
    }
    if (beginWord === endWord) {
        return 1;
    }
    const queue = [[beginWord, 1]];
    while (queue.length > 0) {
        let [str, count] = queue.shift();
        if (str === endWord) {
            return count;
        }
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < 26; j++) {
                let val = str.slice(0, i) + String.fromCharCode(97 + j) + str.slice(i + 1);
                if (wordSet.has(val)) {
                    wordSet.delete(val);
                    queue.push([val, count + 1]);
                }
            }
        }
    }
    return 0;
};
// @lc code=end

