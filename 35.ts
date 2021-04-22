function searchInsert(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        }
        let cur = nums[i]
        let pre = nums[i - 1] || -Number.MAX_SAFE_INTEGER
        if (target > pre && target < cur) {
            return i
        }
    }
    return nums.length
};
let nums = [1, 3, 5, 6]
let target = 3
console.log(searchInsert(nums, target))
export default searchInsert