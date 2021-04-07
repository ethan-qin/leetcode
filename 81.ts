// 已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转 ，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。

// 给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。

//  

// 示例 1：

// 输入：nums = [2,5,6,0,0,1,2], target = 0
// 输出：true
// 示例 2：

// 输入：nums = [2,5,6,0,0,1,2], target = 3
// 输出：false
//  

// 提示：

// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// 题目数据保证 nums 在预先未知的某个下标上进行了旋转
// -104 <= target <= 104
//  

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function search(nums: number[], target: number): boolean {
    let M = 0
    // 找到转换点M
    while (M < nums.length - 1) {
        if (nums[M] === target) {
            return true
        }
        if (nums[M] < nums[M - 1]) {
            break
        }
        M++
    }
    //如果存在转换点并且转换点值大于target，即大于数组内最大值。直接false
    if (M != nums.length - 1 && target > nums[M - 1]) {
        return false
    }
    let left = 0
    let right = 0

    // 如果在前区间，即查找范围是0到M
    // 如果没有转换点，则M是递增数组尾部，不影响下面区间划分
    if (target >= nums[0] && target <= nums[M - 1]) {
        left = 0
        right = M - 1
    } else {
        // 后区间，查找范围是M到结束
        left = M
        right = nums.length - 1
    }

    // 二分查找
    while (left <= right) {
        let mid = (left + right) / 2 << 0
        if (nums[mid] === target) {
            return true
        } else if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        }
    }
    return false
};

let nums_4 = [1, 3], target_4 = 3
console.log(search(nums_4, target_4))