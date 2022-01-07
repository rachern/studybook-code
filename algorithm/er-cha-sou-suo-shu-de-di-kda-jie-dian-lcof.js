/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthLargest = function(root, k) {
    let res = []
    res = inorder(root, res)
    return res[res.length - k]
};

var inorder = function (root, arr) {
    if (!root) return null
    inorder(root.left, arr)
    arr.push(root.val)
    inorder(root.right, arr)
    return arr
}