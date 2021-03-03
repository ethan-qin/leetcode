// 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。

// 输入: 2
// 输出: [0,1,1]


function countBits(num: number): number[] {
    const ret: number[] = []
    for (let i = 0; i <= num; i++) {
       ret.push(countsOnes(i))
    }
    return ret
};
function countsOnes(num: number) {
    let count = 0
    while (num > 0) {
        num = num & num - 1
        count++
    }
    return count
}

console.log(countBits(5))