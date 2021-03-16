// 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

//  

// 示例 1：


// 输入：n = 3
// 输出：[[1,2,3],[8,9,4],[7,6,5]]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/spiral-matrix-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function generateMatrix(n: number): number[][] {
    let ret: number[][] = new Array(n).fill(0).map(item => new Array(n))
    let time = 0
    let num = 0
    while (num < n * n) {
        let i = time
        let j = time
        if (i === n - 1 - time) {
            num++
            ret[i][j] = num
            return ret
        }
        while (j < n - 1 - time) {
            num++
            ret[i][j] = num
            j++
        }
        while (i < n - 1 - time) {
            num++
            ret[i][j] = num
            i++
        }
        while (j > time) {
            num++
            ret[i][j] = num
            j--
        }
        while (i > time) {
            num++
            ret[i][j] = num
            i--
        }
        time++
    }
    // console.log(ret);
    return ret


};

console.log(generateMatrix(3))