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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function sym(r1,r2){
        if(!r1&&!r2){
            return true
        }
        if(!r1 ||!r2){
            return false
        }
        if(r1.val !==r2.val){
            return false
        }
        return sym(r1.left ,r2.right) && sym(r1.right,r2.left)
    }
    return sym(root.left,root.right)
};