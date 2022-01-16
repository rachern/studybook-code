/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @desc 解法一
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    if (!root) return []
    const ans = []
    let k = 0
    _levelOrder(root, k, ans)
    return ans.map((v, i) => {
        if (i % 2 === 1) {
            return v.reverse()
        }
        return v
    })
};

var _levelOrder = function(root, k, ans) {
    if (!ans[k]) ans[k] = []
    ans[k].push(root.val)
    root.left && _levelOrder(root.left, k + 1, ans)
    root.right && _levelOrder(root.right, k + 1, ans)
}


/**
 * @desc 利用队列
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    if (!root) return []
    const ans = []
    const nodeArr = [root]
    let sign = false
    while (nodeArr.length) {
        const len = nodeArr.length
        const arr = []
        for (let i = 0; i < len; i++) {
            const node = nodeArr.shift()
            if (sign) {
                arr.unshift(node.val)
            } else {
                arr.push(node.val)
            }
            node.left && nodeArr.push(node.left)
            node.right && nodeArr.push(node.right)
        }
        ans.push(arr)
        sign = !sign
    }
    return ans
};