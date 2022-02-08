/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @desc 迭代
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    while(true) {
        if (root.val < p.val && root.val < q.val) {
            root = root.right
        } else if (root.val > p.val && root.val > q.val) {
            root = root.left
        } else {
            return root
        }
    }
};

/**
 * @desc 递归
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    if (root.val < p.val && root.val < q.val) {
        root = lowestCommonAncestor(root.right, p, q)
    } else if (root.val > p.val && root.val > q.val) {
        root = lowestCommonAncestor(root.left, p, q)
    }
    return root
};