/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @desc 中序遍历-递归
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    const ans = []
    inOrder(root, ans)
    return ans[k - 1]
};

var inOrder = function(root, ans) {
    if (!root) return
    inOrder(root.left, ans)
    ans.push(root.val)
    inOrder(root.right, ans)
}

/**
 * @desc 中序遍历-迭代
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    const nodeArr = []
    while (k-- && (nodeArr.length || root)) {
        while (root) {
            nodeArr.push(root)
            root = root.left
        }
        root = nodeArr.pop()
        k && (root = root.right)
    }
    return root.val
};

/**
 * @desc 记录子树的节点数
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    const myBst = new BST(root)
    return myBst.getKth(k)
};

class BST {
    constructor(root) {
        this.root = root
        this.map = new Map()
        this.nodeNums(root)
    }

    nodeNums(root) {
        if (!root) return 0
        this.map.set(root, this.nodeNums(root.left) + this.nodeNums(root.right) + 1)
        return this.map.get(root)
    }

    getNums(root) {
        return this.map.get(root) || 0
    }

    getKth(k) {
        let root = this.root
        while (root) {
            const left = this.getNums(root.left)
            if (left < k - 1) {
                root = root.right
                k = k - left - 1
            } else if (left === k - 1) {
                break
            } else {
                root = root.left
            }
        }
        return root.val
    }
}