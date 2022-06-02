/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] 设计推特
 */

// @lc code=start

var Twitter = function() {
    this.article = [];
    this.user = new Map();
    this.tfUser = function (userId) {
        if (!this.user.has(userId)) {
            this.user.set(userId, []);
        }
    }
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.article.unshift([userId, tweetId]);
    this.tfUser(userId)
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    this.tfUser(userId);
    let arr = this.user.get(userId);
    arr.push(userId);
    let res = [];
    this.article.forEach((values) => {
        if (arr.includes(values[0])) {
            res.push(values[1])
        }
    })
    if (res.length > 10) {
        res =  res.slice(0, 10)
    }
    return res
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    this.tfUser(followerId);
    this.user.get(followerId).push(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    this.tfUser(followerId);
    let index = this.user.get(followerId).indexOf(followeeId);
    if (index !== -1) {
        this.user.get(followerId).splice(index, 1);
    }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end

