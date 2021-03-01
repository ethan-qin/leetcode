// 给定一个整数数组  nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。

// 实现 NumArray 类：

// NumArray(int[] nums) 使用数组 nums 初始化对象
// int sumRange(int i, int j) 返回数组 nums 从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点（也就是 sum(nums[i], nums[i + 1], ... , nums[j])）

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/range-sum-query-immutable
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 输入：
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// 输出：
// [null, 1, -1, -3]

// 解释：
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
// numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1)) 
// numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))
//  

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/range-sum-query-immutable
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

class NumArray {
    nums: number[]
    constructor(nums: number[]) {
        this.nums = nums
    }

    sumRange(i: number, j: number): number {
        let sum = 0;
        for (let index = i; index <= j; index++) {
            sum += this.nums[index]
        }
        return sum
    }
}
let nums = [-2, 0, 3, -5, 2, -1]
var obj = new NumArray(nums)
var param_1 = obj.sumRange(0, 2)
console.log(param_1);

var param_2 = obj.sumRange(2, 5)
console.log(param_2);
var param_3 = obj.sumRange(0, 5)
console.log(param_3);