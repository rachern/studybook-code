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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    return isSame(root, root)
};

var isSame = function(p, q) {
    if (!p && !q) return true
    if (p && !q || !p && q || p.val !== q.val) return false
    return isSame(p.left, q.right) && isSame(p.right, q.left)
}

/**
 * @desc 迭代
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    const queue = [root, root]

    while (queue.length) {
        const node1 = queue.shift()
        const node2 = queue.shift()
        if (!node1 && !node2) continue
        if (!node1 && node2 || node1 && !node2 || node1.val !== node2.val) return false

        queue.push(node1.left)
        queue.push(node2.right)
        queue.push(node1.right)
        queue.push(node2.left)
    }
    return true
};