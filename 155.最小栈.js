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
    this._stack = []
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
    if (this.minValue > val) {
        this._stack.push(val - this.minValue);
        this.minValue = val;
    } else {
        this._stack.push(val - this.minValue);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let top = this._stack.pop();
    let ret = null;
    if (top < 0) {
        ret = this.minValue;
        this.minValue = this.minValue - top;
    } else {
        ret = this.minValue + top;
    }
    if (this._stack.length === 0) {
        this.minValue = null;
    }
    return ret;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let top = this._stack[this._stack.length - 1];
    let ret = null;
    if (top < 0) {
        ret = this.minValue;
    } else {
        ret = this.minValue + top;
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

