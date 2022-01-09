/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @desc 递归
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    const ans = []
    preorder(root, ans)
    return ans
};

var preorder = function(root, ans) {
    if (!root) return
    ans.push(root.val)
    preorder(root.left, ans)
    preorder(root.right, ans)
    return ans
}

/**
 * @desc 迭代
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    if (!root) return []
    const ans = []
    const treeNodeArr = [root]
    while (treeNodeArr.length) {
        const node = treeNodeArr.shift()
        node.right && treeNodeArr.unshift(node.right)
        node.left && treeNodeArr.unshift(node.left)
        ans.push(node.val)
    }
    return ans
};