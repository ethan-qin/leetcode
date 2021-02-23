// 给你一个 m x n 的矩阵 matrix 。如果这个矩阵是托普利茨矩阵，返回 true ；否则，返回 false 。

// 如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/toeplitz-matrix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 输入：matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
// 输出：true
// 解释：
// 在上述矩阵中, 其对角线为: 
// "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]"。 
// 各条对角线上的所有元素均相同, 因此答案是 True 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/toeplitz-matrix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function isToeplitzMatrix(matrix: number[][]): boolean {
    if ((matrix && matrix.length === 1) || matrix && matrix[0] && matrix[0].length === 1) {
        return true
    }
    let _matrix = matrix.map(item => item.join("-"))
    let ret = true
    for (let i = 1; i < _matrix.length; i++) {
        const element = _matrix[i];
        const prevElement = _matrix[i - 1];
        console.log(element);
        console.log(prevElement);

        let index = element.indexOf('-')
        let prevIndex = prevElement.lastIndexOf('-')
        if (element.substr(index + 1) !== prevElement.substring(0, prevIndex)) {
            ret = false
        }
    }
    return ret
};
// 11 75 7 93
// 40 11 74 7
// console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]));
console.log(isToeplitzMatrix([[11, 74, 7, 93], [40, 11, 74, 7]]));
