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
 var postorderTraversal = function(root) {
    const arr = []
    postorder(root, arr)
    return arr
};

var postorder = function(root, arr) {
    if (!root) return
    postorder(root.left, arr)
    postorder(root.right, arr)
    arr.push(root.val)
}


/**
 * @desc 迭代
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    const res = []
    if (!root) return res
    const stack = [root]
    while (stack.length) {
        root = stack.pop()
        res.unshift(root.val)
        if (root.left) stack.push(root.left)
        if (root.right) stack.push(root.right)
    }
    return res
};