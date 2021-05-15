/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    var numSubarrays = 1; // Our base case
	var sum = 0;
	for(var i = 0; i < nums.length; i++) {
		sum += nums[i];
		// Would this fit into our previous subarray?
		if(sum > m) { //No
			numSubarrays++; // we would need a new subarray
			sum = nums[i]; // That starts out by containing this new element
		}
	}
	
	return numSubarrays;
};
// @lc code=end

