/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxPathSum = function(root) {
    let maxSum = Number.MIN_SAFE_INTEGER

    let maxPath = root => {
        if (!root) return 0
        const left = Math.max(maxPath(root.left), 0)
        const right = Math.max(maxPath(root.right), 0)

        maxSum = Math.max(maxSum, root.val + left + right)

        return root.val + Math.max(left, right)
    }

    maxPath(root)
    return maxSum
};