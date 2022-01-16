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
 * @return {boolean}
 */
 var isBalanced = function(root) {
    if (!root) return true
    return _getDep(root) !== -1
};

var _getDep = function(root) {
    if (!root) return 0
    if (!root.left && !root.right) return 1
    const leftDep = _getDep(root.left)
    const rightDep = _getDep(root.right)
    if (leftDep === -1 || rightDep === -1 || Math.abs(leftDep - rightDep) > 1) return -1
    return Math.max(leftDep, rightDep) + 1
}