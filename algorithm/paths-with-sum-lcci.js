/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
 var pathSum = function(root, sum) {
    if(!root) return 0
    const a = getPathSum(root, sum)
    return a + pathSum(root.left, sum) + pathSum(root.right, sum)
};

var getPathSum = function(root, sum) {
    if(!root) return 0
    return (sum === root.val) + getPathSum(root.left, sum - root.val) + getPathSum(root.right, sum - root.val)
}