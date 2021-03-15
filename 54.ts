// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

//  

// 示例 1：


// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/spiral-matrix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function spiralOrder(matrix: number[][]): number[] {
    let r = matrix.length
    let c = matrix[0].length
    let ret: number[] = []
    let i = 0;
    let j = 0
    let arrow: string = 'right'
    let visited: boolean[][] = new Array(r).fill(0).map(() => new Array(c).fill(false))
    while (ret.length < r * c) {
        if (visited[i] && visited[i][j] === false) {
            ret.push(matrix[i][j])
            visited[i][j] = true
        }
        switch (arrow) {
            case 'right':
                j++
                if (visited[i][j] !== false) {
                    j--
                    arrow = 'bottom'
                }
                break;
            case 'bottom':
                i++
                if (!visited[i] || visited[i][j] !== false) {
                    i--
                    arrow = 'left'
                }
                break;
            case 'left':
                j--
                if (visited[i] && visited[i][j] !== false) {
                    j++
                    arrow = 'top'
                }
                break;

            default:
                i--
                if (visited[i][j] !== false) {
                    i++
                    arrow = 'right'
                }
                break;
        }
    }
    return ret
};

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(spiralOrder(matrix));
