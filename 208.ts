// Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。

// 请你实现 Trie 类：

// Trie() 初始化前缀树对象。
// void insert(String word) 向前缀树中插入字符串 word 。
// boolean search(String word) 如果字符串 word 在前缀树中，返回 true（即，在检索之前已经插入）；否则，返回 false 。
// boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 true ；否则，返回 false 。
//  

// 示例：

// 输入
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// 输出
// [null, null, true, false, true, null, true]

// 解释
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // 返回 True
// trie.search("app");     // 返回 False
// trie.startsWith("app"); // 返回 True
// trie.insert("app");
// trie.search("app");     // 返回 True
//  

// 提示：

// 1 <= word.length, prefix.length <= 2000
// word 和 prefix 仅由小写英文字母组成
// insert、search 和 startsWith 调用次数 总计 不超过 3 * 104 次

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/implement-trie-prefix-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

class TrieNode {
    children: Array<number | TrieNode>
    isEnd: boolean
    constructor() {
        this.isEnd = false
        this.children = new Array(26).fill(0)
    }
}

class Trie {
    root: TrieNode
    constructor() {
        this.root = new TrieNode()
    }

    insert(word: string): void {
        const aCode = 'a'.charCodeAt(0)
        let head: TrieNode = this.root
        for (let i = 0; i < word.length; i++) {
            let index: number = word[i].charCodeAt(0) - aCode
            if (!head.children[index]) {
                let childNode = new TrieNode()
                head.children[index] = childNode
            }
            if (i === word.length - 1) {
                (head.children[index] as TrieNode).isEnd = true
            }
            head = head.children[index] as TrieNode
        }
    }

    search(word: string): boolean {
        const aCode = 'a'.charCodeAt(0)
        let head: TrieNode = this.root
        for (let i = 0; i < word.length; i++) {
            let index: number = word[i].charCodeAt(0) - aCode
            if (head.children[index]) {
                head = head.children[index] as TrieNode
            } else {
                return false
            }
        }
        return head.isEnd
    }

    startsWith(prefix: string): boolean {
        const aCode = 'a'.charCodeAt(0)
        let head: TrieNode = this.root
        for (let i = 0; i < prefix.length; i++) {
            let index: number = prefix[i].charCodeAt(0) - aCode
            if (head.children[index]) {
                head = head.children[index] as TrieNode
            } else {
                return false
            }
        }
        return true
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */