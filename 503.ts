// 给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。

// 输入: [1,2,1]
// 输出: [2,-1,2]
// 解释: 第一个 1 的下一个更大的数是 2；
// 数字 2 找不到下一个更大的数； 
// 第二个 1 的下一个最大的数需要循环搜索，结果也是 2。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/next-greater-element-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function nextGreaterElements(nums: number[]): number[] {
    let numArr = nums.concat(nums)
    let ret = []
    for (let i = 0; i < numArr.length / 2; i++) {
        let res = numArr[i]
        for (let j = i + 1; j < numArr.length; j++) {
            if (numArr[j] > res) {
                res = numArr[j]
                break
            }
        }
        if(res===numArr[i]){
            res = -1
        }
        ret.push(res)
    }
    return ret
};



// function nextGreaterElements(nums: number[]): number[] {
//     let len = nums.length
//     let ret = new Array(len).fill(-1)
//     const stk: number[] = []
//     for (let i = 0; i < len * 2 - 1; i++) {
//         while (stk.length && nums[stk[stk.length - 1]] < nums[i % len]) {
//             ret[stk[stk.length - 1]] = nums[i % len]
//             stk.pop()
//         }
//         stk.push(i % len)
//     }
//     return ret
// };
// console.log(nextGreaterElements([1, 2, 1]));

console.log(nextGreaterElements([1, 2, 1]));
