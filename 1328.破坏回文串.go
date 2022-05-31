/*
 * @lc app=leetcode.cn id=1328 lang=golang
 *
 * [1328] 破坏回文串
 */
package algorithmcamp

// @lc code=start
func breakPalindrome(palindrome string) string {
	n := len(palindrome)
	if n <= 1 {
		return ""
	}
	for i := 0; i+i < n-1; i++ {
		if palindrome[i] != 'a' {
			return palindrome[:i] + "a" + palindrome[i+1:]
		}
	}
	return palindrome[:n-1] + "b"
}

// @lc code=end
