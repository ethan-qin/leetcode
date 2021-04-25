
// 给你一棵二叉搜索树，请你 按中序遍历 将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。



// 示例 1：


// 输入：root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// 输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
// 示例 2：


// 输入：root = [5,1,7]
// 输出：[1,null,5,null,7]


// 提示：

// 树中节点数的取值范围是 [1, 100]
// 0 <= Node.val <= 1000

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
function increasingBST(root: TreeNode | null): TreeNode | null {
    const list: TreeNode[] = []
    trackback(root, list)
    for (let i = 0; i < list.length - 1; i++) {
        list[i].right = list[i + 1]
    }
    return list[0]
};

function trackback(root: TreeNode | null, list: TreeNode[]) {
    if (!root) return
    let left = root.left
    let right = root.right
    root.left = null
    root.right = null
    trackback(left, list)
    list.push(root)
    trackback(right, list)
}