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
 var deepestLeavesSum = function(root) {
    let ans = 0, max_k = 0

    const dfs = (root, k) => {
        if (!root) return
        if (k === max_k) ans += root.val
        if (k > max_k) {
            max_k = k
            ans = root.val
        }
        dfs(root.left, k + 1, max_k)
        dfs(root.right, k + 1, max_k)
    }

    dfs(root, 1)
    
    return ans
};