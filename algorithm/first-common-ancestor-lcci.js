/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    let ans
    const dfs = (root, p, q) => {
        if (!root) return false
        const fl = dfs(root.left, p, q)
        const fr = dfs(root.right, p, q)
        if ((fl && fr) || (fl || fr) && (root.val === p.val || root.val === q.val)) {
            ans = root
        }

        return fl || fr || root.val === p.val || root.val === q.val
    }
    dfs(root, p, q, ans)
    return ans
};