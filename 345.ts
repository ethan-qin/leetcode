// 给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。

// 当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。

// 请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。

// 注意：不允许旋转信封。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/russian-doll-envelopes
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 输入：envelopes = [[5,4],[6,4],[6,7],[2,3]]
// 输出：3
// 解释：最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。


function maxEnvelopes(envelopes: number[][]): number {
    envelopes.sort((a, b) => a[0] - b[0] || b[1] - a[1])
    let dp = new Array(envelopes.length).fill(1)
    for (let i = 0; i < envelopes.length; i++) {
        for (let j = 0; j < i; j++) {
            if (envelopes[i][1] > envelopes[j][1]) {
                dp[i] = Math.max(dp[j] + 1, dp[i])
            }
        }
    }
    return Math.max(...dp)
};

const envelopes = [[1, 3], [3, 5], [6, 7], [6, 8], [8, 4], [9, 5]]

console.log(maxEnvelopes(envelopes));
