/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (!root) return []
    let k = 0
    const ans = []
    return _levelOrder(root, k, ans)
};

var _levelOrder = function(root, k, ans) {
    if (!ans[k]) ans[k] = []
    ans[k].push(root.val)
    root.left && _levelOrder(root.left, k + 1, ans)
    root.right && _levelOrder(root.right, k + 1, ans)
    return ans
}