/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var generateTrees = function(n) {
    const ans = dfs(1, n)
    return ans
};

var dfs = function(l, r) {
    const ans = []

    if (l > r) {
        ans.push(null)
        return ans
    }

    for (let i = l; i <= r; i++) {
        const left_tree = dfs(l, i - 1)
        const right_tree = dfs(i + 1, r)

        for (const left of left_tree) {
            for (const right of right_tree) {
                ans.push(new TreeNode(i, left, right))
            }
        }
    }

    return ans
}