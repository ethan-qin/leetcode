// 给定一个二进制矩阵 A，我们想先水平翻转图像，然后反转图像并返回结果。

// 水平翻转图片就是将图片的每一行都进行翻转，即逆序。例如，水平翻转 [1, 1, 0] 的结果是 [0, 1, 1]。

// 反转图片的意思是图片中的 0 全部被 1 替换， 1 全部被 0 替换。例如，反转 [0, 1, 1] 的结果是 [1, 0, 0]。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/flipping-an-image
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 输入：[[1,1,0],[1,0,1],[0,0,0]]
// 输出：[[1,0,0],[0,1,0],[1,1,1]]
// 解释：首先翻转每一行: [[0,1,1],[1,0,1],[0,0,0]]；
//      然后反转图片: [[1,0,0],[0,1,0],[1,1,1]]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/flipping-an-image
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function flipAndInvertImage(A: number[][]): number[][] {
    let len = A[0].length
    for (let i = 0; i < A.length; i++) {
        const element = A[i];
        let left = 0, right = len - 1
        while (left < right) {
            if (element[left] === element[right]) {
                element[left] ^= 1
                element[right] ^= 1
            }
            left++
            right--
        }
        if (left === right) {
            element[left] ^= 1
        }
    }
    return A
};


console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]))