/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
 var getAllElements = function(root1, root2) {
    const arr1 = []
    const arr2 = []
    inorderSort(root1, arr1)
    inorderSort(root2, arr2)
    const temp = []
    while (arr1.length || arr2.length) {
        if (!arr2.length || arr1.length && arr1[0] < arr2[0]) {
            temp.push(arr1.shift())
        } else {
            temp.push(arr2.shift())
        }
    }
    return temp
};

var inorderSort = function(root, arr) {
    if (!root) return root
    inorderSort(root.left, arr)
    arr.push(root.val)
    inorderSort(root.right, arr)
}