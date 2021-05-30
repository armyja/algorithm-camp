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
    // 每次都遍历队列，初始时存入beginWord，对应层级为1
    let queue = [[beginWord, 1]];
    // 虽然两端的遍历都需要使用队列，实际操作时可以用Map来加速判断是否相遇的过程
    // 每次遍历时，只需要取queue和map中长度较小的一个，将其转换为一个队列进行遍历即可
    let map = new Map([[endWord, 1]]);
    // 使用Set判断wordList中的单词是否被使用过
    let wordSet = new Set(wordList);

    // 由于双向BFS即使endWord不存在于wordList中，也有可能会相遇
    // 因此要先判断wordList中是否有endWord，若不存在则表示无法转换
    if (!wordSet.has(endWord)) {
        return 0;
    }

    // 如果queue和map中任意一个被清空，表示双向BFS不会相遇，即为无法进行转换
    while (queue.length && map.size) {
        // 选取queue和map中较短的一个进行遍历，优化搜索速度
        if (queue.length > map.size) {
            // 将queue和map对调，保证每次遍历的都是queue
            [queue, map] = [Array.from(map), new Map(queue)];
        }

        // 将queue中元素出队，搜索下一个转换的单词
        const [word, level] = queue.shift();

        // 遍历当前单词的每个字符
        for (let i = 0; i < word.length; i++) {
            // 生成a-z的字符
            for (let j = 97; j < 123; j++) {
                // 以单词hit为例，此处生成的是该单词中每个字母所有可能变化情况
                // 即为*it、h*t、hi*，*号可被a-z替代
                const newWord =
                    word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);

                // 如果newWord在map中存在，表示双向BFS相遇，即为找到了最短序列
                if (map.has(newWord)) {
                    // 将两端的level想加，即为总长度
                    return map.get(newWord) + level;
                }

                // 如果newWord存在于wordList中，表示newWord可作为下一个转换单词
                if (wordSet.has(newWord)) {
                    // 将newWord从wordList中删除，避免重复使用
                    wordSet.delete(newWord);
                    // 将newWord入队，进行下一层搜索，同时层级加一
                    queue.push([newWord, level + 1]);
                }
            }
        }
    }
    // 如果退出循环，表示未找到转换序列，返回0
    return 0;
};
// @lc code=end

// BFS
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

// Bi-directional BFS
var ladderLength = function (beginWord, endWord, wordList) {
    // 每次都遍历队列，初始时存入beginWord，对应层级为1
    let queue = [[beginWord, 1]];
    // 虽然两端的遍历都需要使用队列，实际操作时可以用Map来加速判断是否相遇的过程
    // 每次遍历时，只需要取queue和map中长度较小的一个，将其转换为一个队列进行遍历即可
    let map = new Map([[endWord, 1]]);
    // 使用Set判断wordList中的单词是否被使用过
    let wordSet = new Set(wordList);

    // 由于双向BFS即使endWord不存在于wordList中，也有可能会相遇
    // 因此要先判断wordList中是否有endWord，若不存在则表示无法转换
    if (!wordSet.has(endWord)) {
        return 0;
    }

    // 如果queue和map中任意一个被清空，表示双向BFS不会相遇，即为无法进行转换
    while (queue.length && map.size) {
        // 选取queue和map中较短的一个进行遍历，优化搜索速度
        if (queue.length > map.size) {
            // 将queue和map对调，保证每次遍历的都是queue
            [queue, map] = [Array.from(map), new Map(queue)];
        }

        // 将queue中元素出队，搜索下一个转换的单词
        const [word, level] = queue.shift();

        // 遍历当前单词的每个字符
        for (let i = 0; i < word.length; i++) {
            // 生成a-z的字符
            for (let j = 97; j < 123; j++) {
                // 以单词hit为例，此处生成的是该单词中每个字母所有可能变化情况
                // 即为*it、h*t、hi*，*号可被a-z替代
                const newWord =
                    word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);

                // 如果newWord在map中存在，表示双向BFS相遇，即为找到了最短序列
                if (map.has(newWord)) {
                    // 将两端的level想加，即为总长度
                    return map.get(newWord) + level;
                }

                // 如果newWord存在于wordList中，表示newWord可作为下一个转换单词
                if (wordSet.has(newWord)) {
                    // 将newWord从wordList中删除，避免重复使用
                    wordSet.delete(newWord);
                    // 将newWord入队，进行下一层搜索，同时层级加一
                    queue.push([newWord, level + 1]);
                }
            }
        }
    }
    // 如果退出循环，表示未找到转换序列，返回0
    return 0;
};