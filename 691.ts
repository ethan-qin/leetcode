// 给定一个非空且只包含非负数的整数数组 nums，数组的度的定义是指数组里任一元素出现频数的最大值。

// 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/degree-of-an-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 输入：[1, 2, 2, 3, 1]
// 输出：2
// 解释：
// 输入数组的度是2，因为元素1和2的出现频数最大，均为2.
// 连续子数组里面拥有相同度的有如下所示:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// 最短连续子数组[2, 2]的长度为2，所以返回2

function findShortestSubArray(nums: number[]): number {
    let map = new Map()
    nums.forEach(num => {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    });
    let maxTimes = 0;
    Array.from(map).forEach(item => {
        if (item[1] > maxTimes) {
            maxTimes = item[1]
        }
    })
    let maxLen = nums.length
    let left = 0;
    let right = 0;
    let res = maxLen;
    let _map: { [propName: number]: number } = {}
    while (left < maxLen + 1 && right < maxLen + 1) {
        if (Math.max(...Object.values(_map)) < maxTimes) {
            if (_map[nums[right]]) {
                _map[nums[right]] = ++_map[nums[right]]
            } else {
                _map[nums[right]] = 1
            }
            right++
        } else {
            _map[nums[left]] = --_map[nums[left]]
            left++
        }
        if (Math.max(...Object.values(_map)) === maxTimes) {
            res = Math.min(res, right - left)
        }
    }

    return res
};
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]))