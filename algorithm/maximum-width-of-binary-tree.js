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
 * @return {number}
 */
 var widthOfBinaryTree = function(root) {
    let res = 0
    const ans = [{root, ind: 0n}]
    while(ans.length) {
        let len = ans.length
        let l = ans[0].ind, r = ans[0].ind
        for(let i = 0; i < len; i++) {
            let root = ans[0].root
            let ind = ans[0].ind
            r = ind
            root.left && ans.push({root: root.left, ind: ind * 2n})
            root.right && ans.push({root: root.right, ind: ind * 2n + 1n})
            ans.shift()
        }
        res = res < r - l + 1n ? r - l + 1n : res
    }
    return res
};