// 给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。

// 矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。

// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[[1,4,7],[2,5,8],[3,6,9]]

// 输入：matrix = [[1,2,3],[4,5,6]]
// 输出：[[1,4],[2,5],[3,6]]

function transpose(matrix: number[][]): number[][] {
    let ret: number[][] = Array.from(new Array(matrix[0].length)).map(() => [])


    let len = Math.max(matrix.length, matrix[0].length)
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            if (matrix[i] && matrix[i][j] !== undefined && matrix[j] && matrix[j][i] !== undefined) {
                ret[i][j] = matrix[j][i]
                ret[j][i] = matrix[i][j]
            } else {
                if (matrix[i] && matrix[i][j] !== undefined) {
                    ret[j][i] = matrix[i][j]
                }
                if (matrix[j] && matrix[j][i] !== undefined) {
                    ret[i][j] = matrix[j][i]
                }
            }
        }
    }
    return ret
};

transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])