// 给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。

// 返回仅包含 1 的最长（连续）子数组的长度。

// 输入：A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
// 输出：6
// 解释： 
// [1,1,1,0,0,1,1,1,1,1,1]
// 粗体数字从 0 翻转到 1，最长的子数组长度为 6。

function longestOnes(A: number[], K: number): number {
    let left = 0;
    let right = 0;
    let maxLen = A.length
    let changedNum = 0;
    let result = 0
    while (left < maxLen && right < maxLen) {
        if (changedNum > K) {
            if (A[left] === 0) {
                changedNum--
            }
            left++
        } else {
            if (A[right] === 0) {
                changedNum++
            }
            right++
        }
        if (changedNum <= K) {
            result = Math.max(result, right - left)
        }
    }
    return result
};

console.log(longestOnes([0, 0, 0, 1], 4))