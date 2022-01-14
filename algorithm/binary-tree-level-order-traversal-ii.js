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
 * @return {number[][]}
 */
 var levelOrderBottom = function(root) {
    if (!root) return []
    const ans = []
    let k = 0
    _levelOrder(root, k, ans)
    return ans.reverse()
};

var _levelOrder = function(root, k, ans) {
    if (!ans[k]) ans[k] = []
    ans[k].push(root.val)
    root.left && _levelOrder(root.left, k + 1, ans)
    root.right && _levelOrder(root.right, k + 1, ans)
}