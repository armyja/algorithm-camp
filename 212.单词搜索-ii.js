/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

 function Trie() {
    this.root = {};
    this.endWord = "$";
}

Trie.prototype.insert = function(word) {
    let node = this.root;
    for (let ch of word) {
        node.children = node.children || {};
        node.children[ch] = node.children[ch] || {};
        node = node.children[ch];
    }
    node[this.endWord] = word;
}

Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (let ch of prefix) {
        if (node.children === undefined || node.children[ch] === undefined) {
            return false;
        }
        node = node.children[ch];
    }
    return true;
}

var findWords = function(board, words) {
    let trie = new Trie();

    for (let i = 0; i < words.length; i++) {
        trie.insert(words[i]);
    }

    const res = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const ch = board[i][j];
            if (trie.startsWith(ch)) {
                backtrack(board, res, trie.root, i, j, 0, 0);
            }
        }
    }
    return res;
};

function backtrack(board, res, parentNode, x, y, xd, yd) {
    // x, y is valid
    const val = board[x][y];
    if (val === "#") {
        return;
    }
    // trie
    let node = parentNode.children[val];
    if (node["$"] !== undefined) {
        // find a word
        res.push(node["$"]);
        // delete node
        node["$"] = undefined;
        if (node.children === undefined) {
            parentNode.children[val] = undefined;
            return;
        }
    }

    // visited
    board[x][y] = "#";
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    for (let [p, q] of directions) {
        if (xd + p === 0 && yd + q === 0) {
            continue;
        }
        let [xn, yn] = [xd + x, yd + y];
        if (xn < 0 || xn >= board.length || yn < 0 || yn >= board[xn].length) {
            continue;
        }
        if (node.children[board[xn][yn]] !== undefined) {
            backtrack(board, res, node, xn, yn, p, q);
        }
    }

    board[x][y] = val;
}
//  var Trie = function () {
//     this.root = {};
//     this.endWord = "$";
// }


// Trie.prototype.insert = function (word) {
//     let node = this.root;
//     for (let ch of word) {
//         node.children = node.children || {};
//         node.children[ch] = node.children[ch] || {};
//         node = node.children[ch];
//     }
//     node[this.endWord] = word;
// }

// Trie.prototype.startsWith = function (prefix) {
//     let node = this.root;
//     for (let ch of prefix) {
//         node.children = node.children || {};
//         if (!node.children[ch]) {
//             return false;
//         }
//         node = node.children[ch];
//     }
//     return true;
// }

// var findWords = function (board, words) {
//     const trie = new Trie();
//     for (let i = 0; i < words.length; i++) {
//         trie.insert(words[i]);
//     }
//     const result = [];
//     for (let row = 0; row < board.length; row++) {
//         for (let col = 0; col < board[row].length; col++) {
//             if (trie.startsWith(board[row][col])) {
//                 backtracking(board, result, row, col, trie.root, 0, 0);
//             }
//         }
//     }
//     return result;
// }

// function backtracking(board, result, row, col, parentNode, xd, yd) {
//     const char = board[row][col];
//     if (char === "#") {
//         return;
//     }
//     const node = parentNode.children[char];
//     if (node["$"] !== undefined) {
//         result.push(node["$"]);
//         // remove
//         node["$"] = undefined;
//         if (node.children === undefined) {
//             parentNode.children[char] = undefined;
//             return;
//         }
//     }

//     board[row][col] = "#";
//     const XDirections = [-1, 0, 1, 0];
//     const YDirections = [0, -1, 0, 1];
//     for (let i = 0; i < 4; i++) {
//         if (xd + XDirections[i] === 0 && yd + YDirections[i] === 0) {
//             continue;
//         }
//         const nextX = row + XDirections[i];
//         const nextY = col + YDirections[i];
//         if (0 > nextX || nextX >= board.length ||
//             0 > nextY || nextY >= board[nextX].length) {
//             continue;
//         }
//         const char = board[nextX][nextY];
//         if (node.children[char]) {
//             backtracking(board, result, nextX, nextY, node, XDirections[i], YDirections[i]);
//         }
//     }
//     board[row][col] = char;
// }
// @lc code=end

board = [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]], words = ["oath", "pea", "eat", "rain"]
findWords(board, words);