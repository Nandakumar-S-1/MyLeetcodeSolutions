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
 * @return {number[]}
 */
var rightSideView = function (root) {
    let res = []

    function dfs(node, lev) {
        if (!node) return
        if (lev === res.length) {
            res.push(node.val)
        }
        dfs(node.right, lev + 1)
        dfs(node.left, lev + 1)
    }
    dfs(root, 0)
    return res
};