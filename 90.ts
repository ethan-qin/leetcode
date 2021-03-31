function subsetsWithDup(nums: number[]): number[][] {
    const numArr = nums.sort((a, b) => a - b)
    const ret: number[][] = []
    function callback(start: number, list: number[] = []) {
        ret.push(list.slice(0))
        if (start === numArr.length) {
            return
        }
        for (let i = start; i < numArr.length; i++) {
            if (numArr[i] === numArr[i - 1] && i > start) {
                continue
            }
            list.push(numArr[i])
            callback(i + 1, list)
            list.pop()
        }
    }
    callback(0)
    return ret
};
const nums_1 = [1, 2, 1, 2]
console.log(subsetsWithDup(nums_1))