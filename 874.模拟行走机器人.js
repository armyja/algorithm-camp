/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    const obstacleMap = {};
    
    for (let obstacle of obstacles) {
        obstacleMap[obstacle] = true;
    }

    /**
     * north 0
     * east 1
     * south 2
     * west 3
     */
    let d = 0;
    let res = 0;
    let x = 0;
    let y = 0;
    for (let i of commands) {
        if (i === -1) {
            d = (d + 1) % 4;
        } else if (i === -2) {
            d = (d + 4 - 1) % 4; 
        } else {
            while (i--) {
                let prevX = x;
                let prevY = y;
                if (d === 0) {
                    y++;
                } else if (d === 1) {
                    x++;
                } else if (d === 2) {
                    y--;
                } else if (d === 3) {
                    x--;
                }

                if (obstacleMap[x + ',' + y]) {
                    x = prevX;
                    y = prevY;
                    break;
                }
            }
        }
        res = Math.max(res, x * x + y * y);
    }
    return res;
};
// @lc code=end

