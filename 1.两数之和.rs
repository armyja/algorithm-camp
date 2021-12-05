/*
 * @lc app=leetcode.cn id=1 lang=rust
 *
 * [1] 两数之和
 */

// @lc code=start
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map: HashMap<i32, usize> = HashMap::new();
        for (index, &value) in nums.iter().enumerate() {
            if let Some(&i) = map.get(&(target - value)) {
                return vec![i as i32, index as i32];
            }
            map.insert(value, index);
        }
        panic!()
    }
}
// @lc code=end
