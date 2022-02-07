/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @desc 深度优先
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    if (!p && !q) return true
    if (p && !q || !p && q || p.val !== q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

/**
 * @desc 广度优先
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    const queue = [p, q]
    while (queue.length) {
        const node1 = queue.shift()
        const node2 = queue.shift()
        if (!node1 && !node2) continue
        if (node1 && !node2 || !node1 && node2 || node1.val !== node2.val) return false
        queue.push(node1.left)
        queue.push(node2.left)
        queue.push(node1.right)
        queue.push(node2.right)
    }
    return true
};