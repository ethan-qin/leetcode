// 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,4,4,5,6,7] 在变化后可能得到：
// 若旋转 4 次，则可以得到 [4,5,6,7,0,1,4]
// 若旋转 7 次，则可以得到 [0,1,4,4,5,6,7]
// 注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

// 给你一个可能存在 重复 元素值的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。

//  

// 示例 1：

// 输入：nums = [1,3,5]
// 输出：1
// 示例 2：

// 输入：nums = [2,2,2,0,1]
// 输出：0
//  

// 提示：

// n == nums.length
// 1 <= n <= 5000
// -5000 <= nums[i] <= 5000
// nums 原来是一个升序排序的数组，并进行了 1 至 n 次旋转

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function findMin(nums: number[]): number {
    let left = 0
    let right = nums.length - 1
    let min = Number.MAX_SAFE_INTEGER
    while (left <= right) {
        if (nums[left] === nums[right]) {
            min = Math.min(min, nums[left])
            left++
            right--
            continue
        }
        let mid = (left + right) / 2 << 0
        if (nums[left] <= nums[mid]) {
            min = Math.min(min, nums[left])
            left = mid + 1
        } else {
            min = Math.min(min, nums[mid])
            right = mid - 1
        }
    }
    return min
};
const nums_6 = [3,3,1,3,3,3,3]
console.log(findMin(nums_6))