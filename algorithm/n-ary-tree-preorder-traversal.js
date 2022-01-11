/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @desc 递归
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    const ans = []
    return _preorder(root, ans)
};

var _preorder = function(root, ans) {
    if (!root) return ans
    ans.push(root.val)
    for (const child of root.children) {
        _preorder(child, ans)
    }
    return ans
}

/**
 * @desc 迭代
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    if (!root) return []
    const res = []
    const treeNodeArr = [root]
    while (treeNodeArr.length) {
        const node = treeNodeArr.shift()
        for (let i = node.children.length; i > 0; i--) {
            treeNodeArr.unshift(node.children[i - 1])
        }
        res.push(node.val)
    }
    return res
};