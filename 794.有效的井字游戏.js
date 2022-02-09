/*
 * @lc app=leetcode.cn id=794 lang=javascript
 *
 * [794] 有效的井字游戏
 */

// @lc code=start
/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function (s) {
  let xs = (os = 0);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (s[i][j] === "X") xs++;
      else if (s[i][j] === "O") os++;
    }
  }
  if (win("X") && xs !== os + 1) return false;
  if (win("O") && xs !== os) return false;
  if (xs !== os && xs !== os + 1) return false;
  return true;
  function win(c) {
    for (let i = 0; i < 3; i++) {
      if (s[i][0] === c && s[i][1] === c && s[i][2] === c) return true;
      if (s[0][i] === c && s[1][i] === c && s[2][i] === c) return true;
    }
    if (s[0][2] === c && s[1][1] === c && s[2][0] === c) return true;
    if (s[0][0] === c && s[1][1] === c && s[2][2] === c) return true;
    return false;
  }
};
// @lc code=end

var validTicTacToe = function (board) {
  let xCount = 0,
    oCount = 0;
  for (const row of board) {
    for (const c of row) {
      xCount = c === "X" ? xCount + 1 : xCount;
      oCount = c === "O" ? oCount + 1 : oCount;
    }
  }
  if (oCount != xCount && oCount !== xCount - 1) {
    return false;
  }
  if (win(board, "X") && oCount !== xCount - 1) {
    return false;
  }
  if (win(board, "O") && oCount !== xCount) {
    return false;
  }
  return true;
};

const win = (board, p) => {
  for (let i = 0; i < 3; ++i) {
    if (p === board[0][i] && p === board[1][i] && p === board[2][i]) {
      return true;
    }
    if (p === board[i][0] && p === board[i][1] && p === board[i][2]) {
      return true;
    }
  }
  if (p === board[0][0] && p === board[1][1] && p === board[2][2]) {
    return true;
  }
  if (p === board[0][2] && p === board[1][1] && p === board[2][0]) {
    return true;
  }
  return false;
};
