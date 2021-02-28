// 如果数组是单调递增或单调递减的，那么它是单调的。

// 如果对于所有 i <= j，A[i] <= A[j]，那么数组 A 是单调递增的。 如果对于所有 i <= j，A[i]> = A[j]，那么数组 A 是单调递减的。

// 当给定的数组 A 是单调数组时返回 true，否则返回 false。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/monotonic-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 输入：[1,2,2,3]
// 输出：true
// 输入：[1,3,2]
// 输出：false
function isMonotonic(A: number[]): boolean {
    let inc = true  // 递增
    let dec = true  // 递减
    for (let i = 1; i < A.length; i++) {
        if (A[i - 1] > A[i]) {
            inc = false
        }
        if (A[i] > A[i - 1]) {
            dec = false
        }
    }
     // 都为true，全部相等或者长度为1
     // 一个true，遇到过为true相反情况
     // 两个个true，即遇到过递增，又遇到过递减
    return inc || dec
};

console.log(isMonotonic([2, 2, 2, 2]))