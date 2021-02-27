// 给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串， 要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。

// 输入：s = "aaabb", k = 3
// 输出：3
// 解释：最长子串为 "aaa" ，其中 'a' 重复了 3 次。

// 输入：s = "ababbc", k = 2
// 输出：5
// 解释：最长子串为 "ababb" ，其中 'a' 重复了 2 次， 'b' 重复了 3 次。
function longestSubstring(s: string, k: number): number {
    const helper = (start: number, end: number): number => {
        if (end - start + 1 < k) {
            return 0
        }
        let cnt: {
            [proppName: string]: number
        } = {}
        for (let i = start; i < end; i++) {
            if (cnt[s[i]] === undefined) {
                cnt[s[i]] = 1
            } else {
                cnt[s[i]]++
            }
        }
        while (end - start + 1 >= k && cnt[s[start]] < k) {
            start++
        }
        while (end - start + 1 >= k && cnt[s[end]] < k) {
            end--
        }
        if (end - start + 1 < k) {
            return 0
        }
        for (let i = start; i <= end; i++) {
            if (cnt[s[i]] < k) {
                return Math.max(helper(start, i - 1), helper(i + 1, end))
            }
        }
        return end - start + 1
    }
    return helper(0, s.length - 1)
};

console.log(longestSubstring("aaabb", 3));
