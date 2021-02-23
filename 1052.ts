// 今天，书店老板有一家店打算试营业 customers.length 分钟。每分钟都有一些顾客（customers[i]）会进入书店，所有这些顾客都会在那一分钟结束后离开。

// 在某些时候，书店老板会生气。 如果书店老板在第 i 分钟生气，那么 grumpy[i] = 1，否则 grumpy[i] = 0。 当书店老板生气时，那一分钟的顾客就会不满意，不生气则他们是满意的。

// 书店老板知道一个秘密技巧，能抑制自己的情绪，可以让自己连续 X 分钟不生气，但却只能使用一次。

// 请你返回这一天营业下来，最多有多少客户能够感到满意的数量。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/grumpy-bookstore-owner
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 输入：customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3
// 输出：16
// 解释：
// 书店老板在最后 3 分钟保持冷静。
// 感到满意的最大客户数量 = 1 + 1 + 1 + 1 + 7 + 5 = 16.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/grumpy-bookstore-owner
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function maxSatisfied(customers: number[], grumpy: number[], X: number): number {
    let sum = 0;
    let window: number[] = []
    grumpy.forEach((item, index) => {
        if (item === 0) {
            sum += customers[index]
            window.push(0)
        } else {
            window.push(customers[index])
        }
    });
    let left = 0;
    let right = 0;
    let _sum = 0;
    let ret = 0
    while (right < window.length) {
        if (right - left < X) {
            _sum += window[right]
            right++
        } else {
            _sum += window[right]
            _sum -= window[left]
            right++
            left++
        }
        ret = Math.max(ret, _sum)
    }
    return sum + ret
};
//                 0  1  2  3  4  5  6  7
const customers = [1, 2, 0], grumpy = [0, 1, 0], X = 2
console.log(maxSatisfied(customers, grumpy, X));

// 1 0 1    2
// 0 1 2    3
// 1 2 1    4
// 2 1 1    4
// 1 1 7    9
// 1 7 5    13