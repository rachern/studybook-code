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
 var minCameraCover = function(root) {
    // 定义一个二维数组，代表父节点与当前节点的 4 种摆放摄像头的情况下，覆盖当前节点所需要的摄像头数量
    // dp[0][0] 父节点和当前节点都没有放置摄像头
    // dp[0][1] 父节点没有放置摄像头，当前节点放置摄像头
    // dp[1][0] 父节点放置摄像头，当前节点没有放置摄像头
    // dp[1][1] 父节点和当前节点都放置摄像头
    const dp = [[0, 0], [0, 0]]
    // 动态规划获取 dp 的值
    DP(root, dp)
    // 获取 监控树的最小摄像头数量
    return Math.min(dp[0][1], dp[0][0])
};

var DP = function(root, dp) {
    // 如果当前节点为空节点，dp 值的 4 种情况
    // 1000 表示不可能存在的现象，因为树的节点数最大是 1000，当我们取最小值时，绝对不可能取到 1000，因此用 1000 来表示不可能现象
    if (!root) {
        dp[0][0] = 0
        dp[0][1] = 1000
        dp[1][0] = 0
        dp[1][1] = 1000
        return
    }
    // 如果当前节点是叶子节点，dp 值的 4 种情况
    if (!root.left && !root.right) {
        dp[0][0] = 1000
        dp[0][1] = 1
        dp[1][0] = 0
        dp[1][1] = 1
        return
    }
    // 分别获取左、右子树 dp 值的 4 种情况
    const l = [[0, 0], [0, 0]], r = [[0, 0], [0, 0]]
    DP(root.left, l)
    DP(root.right, r)
    // 当前节点的最小摄像头数量取决于其子树的最小摄像头数量
    // 如果父节点和当前节点没有放置摄像头，那么必须至少有一个子节点放置摄像头
    dp[0][0] = Math.min(l[0][0] + r[0][1], l[0][1] + r[0][0], l[0][1] + r[0][1])
    // 如果父节点没有放置摄像头，当前节点放置了摄像头，那么子节点放不放置摄像头都行，最后加 1 是当前节点放置的摄像头
    dp[0][1] = Math.min(l[1][0] + r[1][0], l[1][1] + r[1][0], l[1][0] + r[1][1], l[1][1] + r[1][1]) + 1
    // 如果父节点放置摄像头，当前节点没有放置摄像头，那么子节点放不放置摄像头都行
    dp[1][0] = Math.min(dp[0][0], l[0][0] + r[0][0])
    // 如果父节点和当前节点都放置了摄像头，那么子节点放不放置摄像头都行，情况和 dp[0][1] 一致
    dp[1][1] = dp[0][1]
    return
}