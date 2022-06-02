/*
 * @lc app=leetcode.cn id=355 lang=rust
 *
 * [355] 设计推特
 */

// @lc code=start
use std::collections::{HashMap,HashSet};

struct Twitter {
    tweets: Vec<(i32, i32)>,
    followees: HashMap<i32, HashSet<i32>>
}


/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Twitter {

    fn new() -> Self {
        Self {
            tweets: Vec::with_capacity(8),
            followees: HashMap::new()
        }
    }
    
    fn post_tweet(&mut self, user_id: i32, tweet_id: i32) {
        self.tweets.push((user_id, tweet_id));
    }
    
    fn get_news_feed(&self, user_id: i32) -> Vec<i32> {
        self.tweets
            .iter()
            .rev()
            .filter(|(x, _)| {
                *x == user_id
                    || self
                        .followees
                        .get(&user_id)
                        .map_or(false, |s| s.contains(x))
            })
            .map(|(_, x)| *x)
            .take(10)
            .collect()
    }
    
    fn follow(&mut self, follower_id: i32, followee_id: i32) {
        match self.followees.get_mut(&follower_id) {
            Some(s) => {
                s.insert(followee_id);
            }
            None => {
                let mut set = HashSet::new();
                set.insert(followee_id);
                self.followees.insert(follower_id, set);
            }
        }
    }
    
    fn unfollow(&mut self, follower_id: i32, followee_id: i32) {
        match self.followees.get_mut(&follower_id) {
            Some(s) => {
                s.remove(&followee_id);
            }
            None => {
                self.followees.insert(follower_id, HashSet::new());
            }
        }
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * let obj = Twitter::new();
 * obj.post_tweet(userId, tweetId);
 * let ret_2: Vec<i32> = obj.get_news_feed(userId);
 * obj.follow(followerId, followeeId);
 * obj.unfollow(followerId, followeeId);
 */
// @lc code=end

