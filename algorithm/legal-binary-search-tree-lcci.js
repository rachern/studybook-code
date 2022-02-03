/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @desc 递归
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    return _isValidBST(root, +Infinity, -Infinity)
};

var _isValidBST = function(root, max, min) {
    if (!root) return true
    if (root.val >= max || root.val <= min) return false
    return _isValidBST(root.left, root.val, min) && _isValidBST(root.right, max, root.val)
}

/**
 * @desc 中序遍历
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    if (!root) return true
    const nodeArr = []
    let prev
    while (nodeArr.length || root) {
        while (root) {
            nodeArr.push(root)
            root = root.left
        }
        root = nodeArr.pop()
        if (prev && root.val <= prev.val) return false
        prev = root
        root = root.right
    }
    return true
};

/**
 * @desc 中序遍历递归
 * @param {TreeNode} root
 * @return {boolean}
 */
 let prev
 var isValidBST = function(root) {
     if (!root) return true
     if (!isValidBST(root.left)) return false
     if (prev && root.val <= prev.val) return false
     prev = root
     if (!isValidBST(root.right)) return false
     return true
 };