/*
 * @lc app=leetcode.cn id=403 lang=javascript
 *
 * [403] 青蛙过河
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {boolean}
 */
 var canCross = function(stones) {
    let set = new Set();

    let nodes = [[0, 0]];
    while (nodes.length > 0) {
        let [index, step] = nodes.pop();
        set.add(index * 1000 + step);
        for (let i = index + 1; i < stones.length; i++) {
            const gap = stones[i] - stones[index];
            if (step - 1 <= gap && gap <= step + 1) {
                if (i === stones.length - 1) {
                    return true;
                }
                if (!set.has(i * 1000 + gap)) {
                    nodes.push([i, gap]);
                }
            } else if (gap > step + 1) {
                break;
            }
        }
    }
    return false;
};
// @lc code=end


var canCross = function (stones) {
    const set = new Set()
    return helper(stones, 0, 0, set)
 };
 var helper = function (stones, index, k, set) {
     const key = index * 1000 + k
     if (set.has(key)) {
         return false
     } else {
         set.add(key)
     }
     for (let i = index + 1; i < stones.length; i++) {
         const gap = stones[i] - stones[index]
         if (gap >= k-1 && gap <= k+1) {
             if (helper(stones, i, gap, set)) {
                 return true
             }
         } else if (gap > k+1) {
             break
         }
     }
     return index == stones.length - 1
 }