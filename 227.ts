// 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

// 整数除法仅保留整数部分。

//  

// 示例 1：

// 输入：s = "3+2*2"
// 输出：7

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/basic-calculator-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


function calculate(s: string): number {
    let stack = []
    let num = 0
    let preSin = "+"
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(Number(s[i])) && s[i] !== ' ') {
            num = num * 10 + (s[i].charCodeAt(0) - "0".charCodeAt(0))
        }
        if (isNaN(Number(s[i])) || i === s.length - 1) {
            switch (preSin) {
                case '+':
                    stack.push(num)
                    break;
                case '-':
                    stack.push(-num)
                    break;
                case '*':
                    stack.push(num * stack.pop())
                    break;
                default:
                    stack.push(stack.pop() / num | 0)
                    break;
            }
            preSin = s[i]
            num = 0
        }
    }
    let ret = 0
    while (stack.length) {
        ret += stack.pop()
    }
    return ret
};


let s2 = "14-3/2" // 8

console.log(calculate(s2));
;
