/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const map = {};
    let A = 0;
    let B = 0;
    for (let i = 0; i < 10; i++) {
        map[i] = 0;
    }
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            A++;
        } else {
            map[secret[i]]++;
            B += map[secret[i]] <= 0 ? 1 : 0;
            map[guess[i]]--;
            B += map[guess[i]] >= 0 ? 1 : 0;
        }
    }
    return A + 'A' + B + 'B';
};
// @lc code=end

