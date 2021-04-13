
// 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。

// 注意：本题与 530：https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/ 相同



// 示例 1：


// 输入：root = [4,2,6,1,3]
// 输出：1
// 示例 2：


// 输入：root = [1,0,48,null,null,12,49]
// 输出：1


// 提示：

// 树中节点数目在范围 [2, 100] 内
// 0 <= Node.val <= 105
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
function minDiffInBST(root: TreeNode | null): number {
    let nums = []
    const dfs = (node: TreeNode | null) => {
        if (!node) return
        dfs(node.left)
        nums.push(node.val)
        dfs(node.right)
    }
    dfs(root)
    let min = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < nums.length - 1; i++) {
        min = Math.min(min, nums[i + 1] - nums[i])
    }
    return min
};
let node_4 = new TreeNode(4)
let node_2 = new TreeNode(2)
let node_6 = new TreeNode(6)
let node_1 = new TreeNode(1)
let node_3 = new TreeNode(3)
node_4.left = node_2
node_4.right = node_6
node_2.left = node_1
node_2.right = node_3
console.log(minDiffInBST(node_4))

export default minDiffInBST