function searchMatrix(matrix: number[][], target: number): boolean {
    let row = matrix.length
    let col = matrix[0].length
    let i = 0
    let j = col - 1
    while (i < row && j >= 0) {
        if (matrix[i][j] < target) {
            i++
        } else if (matrix[i][j] > target) {
            j--
        } else {
            return true
        }
    }
    return false
};

let matrix_1 = [[-1]], target = -1
console.log(searchMatrix(matrix_1, target))