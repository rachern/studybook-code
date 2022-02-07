/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @desc 广度优先
 * @param {TreeNode} root
 * @return {number[]}
 */
 var rightSideView = function(root) {
    if (!root) return []
    const res = []
    let queue = [root]
    while (queue.length) {
        let n = queue.length
        let node = null
        while (n--) {
            node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(node.val)
    }
    return res
};

/**
 * @desc 深度优先
 * @param {TreeNode} root
 * @return {number[]}
 */
 var rightSideView = function(root) {
    if (!root) return []
    let depth = 0
    const res = []

    var dfs = root => {
        if (!root) return
        depth++
        if (res.length < depth) {
            res.push(root.val)
        }
        dfs(root.right)
        dfs(root.left)
        depth--
    }

    dfs(root)
    return res
};

/**
 * @desc 深度优先
 * @param {TreeNode} root
 * @return {number[]}
 */
 var rightSideView = function(root) {
    if (!root) return []
    const ans = []
    let depth = 0
    dfs(root, depth, ans)
    return ans
};

var dfs = function(root, k, ans) {
    if (!ans[k]) ans[k] = root.val
    root.right && dfs(root.right, k + 1, ans)
    root.left && dfs(root.left, k + 1, ans)
}