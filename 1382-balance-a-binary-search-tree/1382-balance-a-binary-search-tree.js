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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    let inor = []
    function inorder(node){
        if(node===null)return;
        inorder(node.left)
        inor.push(node.val)
        inorder(node.right)
    }
    inorder(root)
    console.log(inor)

    function builtBalance(left,right){
        if(left>right)return null

        let mid= Math.floor((left+right)/2)
        let node= new TreeNode(inor[mid])

        node.left = builtBalance(left,mid-1)
        node.right=builtBalance(mid+1,right)

        return node
    }
    return  builtBalance(0,inor.length-1)
};