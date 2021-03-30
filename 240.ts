

// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。


// 示例 1：


// 输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// 输出：true

// 输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
// 输出：false

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/search-a-2d-matrix-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function searchMatrix_2(matrix: number[][], target: number): boolean {
    let row = matrix.length
    let col = matrix[0].length
    let i = row - 1
    let j = 0
    while (i >= 0 && j < col) {
        if (matrix[i][j] > target) {
            i--
        } else if (matrix[i][j] < target) {
            j++
        } else {
            return true
        }
    }
    return false
};

const matrix_2 = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target_2 = 6

console.log(searchMatrix(matrix_2, target_2))