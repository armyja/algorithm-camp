/**
 * 输入一个字符串，求最长的包含且只包含1807这四个字符且按1→8→0→7顺序的子串的长度。
 */

var maxLengthSequence = function(s) {
    const map = {
        '1' : '8',
        '8' : '0',
        '0' : '7',
        '7' : '1'
    }

    let ret = 0;
    let curr = 0;
    let prevChar = null;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (prevChar === null && map[char] !== undefined) {
            curr = 1;
            prevChar = char;
            continue;
        }

        if (map[prevChar] === char) {
            curr++;
            prevChar = char;
            ret = Math.max(ret, curr);
        } else {
            curr = 0;
            prevChar = null;
        }
    }
    return ret;
};


var test = function() {
    console.log(7 === maxLengthSequence("18071806"))
    console.log(6 === maxLengthSequence("8071806"))
    console.log(3 === maxLengthSequence("180"))
    console.log(4 === maxLengthSequence("18058071"))
}

test();