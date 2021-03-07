// 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。

// 返回 s 所有可能的分割方案。

// 输入: "aab"
// 输出:
// [
//   ["aa","b"],
//   ["a","a","b"]
// ]
function rollback(list: string[][], res: string[], start: number, s: string) {
    if (start === s.length) {
        list.push([...res])
        return
    }
    let sArr = s.split('')
    for (let i = start; i < sArr.length; i++) {
        let ele = s.substring(start, i + 1)
        if (!isPalindrom(ele)) {
            continue
        }
        res.push(ele)
        rollback(list, res, i + 1, s)
        res.pop()
    }
}
function isPalindrom(str: string) {
    let left = 0;
    let right = str.length - 1
    let ret = true
    while (left < right) {
        if (str[left] !== str[right]) {
            ret = false
            break
        }
        left++
        right--
    }
    return ret
}
function partition(s: string): string[][] {
    let list: string[][] = []
    let res: string[] = []
    rollback(list, res, 0, s)
    return list
};
console.log(partition('aabcdfeffea'));
