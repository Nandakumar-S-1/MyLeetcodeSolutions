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
var sortedArrayToBST = function(nums) {
    function BST(l,r){
        if(l>r){
            return null
        }
        let mid=Math.floor((l+r)/2)
        let node=new TreeNode(nums[mid])

        node.left=BST(l,mid-1)
        node.right=BST(mid+1,r)
        return node
    }
    return BST(0,nums.length-1)
};