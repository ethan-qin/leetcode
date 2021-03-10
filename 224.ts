
// 实现一个基本的计算器来计算一个简单的字符串表达式 s 的值。



// 示例 1：

// 输入：s = "1 + 1"
// 输出：2
// 示例 2：

// 输入：s = " 2-1 + 2 "
// 输出：3

function calculate(s: string): number {
    let sArr: string[] = s.split('').filter(item => item.trim())
    for (let i = 0; i < sArr.length; i++) {
        let item = sArr[i]
        let j = i
        if (parseFloat(sArr[i]) > 0) {
            while (j < sArr.length && parseFloat(sArr[j + 1]) >= 0) {
                j++
                item += sArr[j]
                sArr[j] = null
            }
            sArr[i] = item
        }
    }
    sArr = sArr.filter(item => item)
    console.log(sArr);

    let listIn: string[] = []
    let listOut: string[] = []
    for (let i = 0; i < sArr.length; i++) {
        listIn.push(sArr[i])
        if (sArr[i] === ')') {
            let isStart = false
            while (listIn.length && !isStart) {
                if (listIn[listIn.length - 1] === '(') {
                    isStart = true
                }
                listOut.push(listIn.pop())
            }
            listIn.push(sum(listOut.slice(1, listOut.length - 1)))
            listOut = []
        }
    }
    while (listIn.length) {

        listOut.push(listIn.pop())
    }
    return parseFloat(sum(listOut))
};

function sum(list: string[]): string {
    let sum = 0
    console.log([...list].reverse());

    for (let i = list.length - 1; i >= 0; i--) {
        if (list[i] === '+') {
            sum += parseFloat(list[i - 1])
            i--
        } else if (list[i] === '-') {
            sum -= parseFloat(list[i - 1])
            i--
        } else {
            sum += parseFloat(list[i])
        }
    }
    console.log('sum', sum);

    return sum.toString()
}
let s = "2-(5-6)"
console.log(calculate(s))