// 给定一个直方图(也称柱状图)，假设有人从上面源源不断地倒水，最后直方图能存多少水量?直方图的宽度为 1。



// 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的直方图，在这种情况下，可以接 6 个单位的水（蓝色部分表示水）。 感谢 Marcos 贡献此图。

// 示例:

// 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出: 6

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/volume-of-histogram-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function trap(height: number[]): number {
    let leftNums: number[] = []
    let rightNums: number[] = []
    let maxLeft = -Number.MAX_SAFE_INTEGER
    let maxRight = -Number.MAX_SAFE_INTEGER
    for (let i = 0; i < height.length; i++) {
        maxLeft = Math.max(maxLeft, height[i])
        leftNums.push(maxLeft)
    }
    for (let i = height.length - 1; i >= 0; i--) {
        maxRight = Math.max(maxRight, height[i])
        rightNums.unshift(maxRight)
    }
    let ret = 0
    for (let i = 1; i < height.length - 1; i++) {
        let left = leftNums[i]
        let right = rightNums[i]
        let min = Math.min(left, right)
        if (min > height[i]) {
            ret += min - height[i]
        }
    }
    return ret
};
const arr = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(arr));
