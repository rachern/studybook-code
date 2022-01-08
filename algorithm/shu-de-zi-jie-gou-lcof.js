/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function(A, B) {
    if (!B || !A) return false
    return compare(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

var compare = function(A, B) {
    if (!B) return true
    if (!A || (A.val !== B.val)) return false
    return compare(A.left, B.left) && compare(A.right, B.right)
}
