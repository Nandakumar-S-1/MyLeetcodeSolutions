/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    if (!nums.length) return null
    let val = Math.max(...nums)
    let ind = nums.indexOf(val)
    let left = nums.slice(0, ind)
    let right = nums.slice(ind + 1)
    return {
        val, left: constructMaximumBinaryTree(left)
        , right: constructMaximumBinaryTree(right)
    }
};