/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minValue = null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.minValue === null) {
        this.minValue = val;
    }
    this.stack.push(val - this.minValue);
    if (val < this.minValue) {
        this.minValue = val;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let val = this.stack.pop();
    let ret = null;
    if (val < 0) {
        ret = this.minValue;
        this.minValue -= val;
    } else {
        ret = this.minValue + val;
    }
    // easy to ignore this step
    if (this.stack.length === 0) {
        this.minValue = null;
    }
    return ret;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let val = this.stack[this.stack.length - 1];
    let ret = null;
    if (val < 0) {
        ret = this.minValue;
    } else {
        ret = this.minValue + val;
    }
    return ret;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minValue;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

