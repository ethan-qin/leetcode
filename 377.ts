// 给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。

// 题目数据保证答案符合 32 位整数范围。

//  

// 示例 1：

// 输入：nums = [1,2,3], target = 4
// 输出：7
// 解释：
// 所有可能的组合为：
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// 请注意，顺序不同的序列被视作不同的组合。
// 示例 2：

// 输入：nums = [9], target = 3
// 输出：0
//  

// 提示：

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 1000
// nums 中的所有元素 互不相同
// 1 <= target <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/combination-sum-iv
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


function combinationSum4(nums: number[], target: number): number {
    const map = new Map()
    return backtrack(nums, target, map)
};

function backtrack(nums: number[], target: number, map: Map<number, number>): number {
    if (target === 0) {
        return 1
    }
    if (map.has(target)) {
        return map.get(target)
    }
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= target) {
            res += backtrack(nums, target - nums[i], map)
        }
    }
    map.set(target, res)
    return res
}

const nums = [2, 1, 3], target = 35
console.log(combinationSum4(nums, target))
export default combinationSum4