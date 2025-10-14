/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let obj={}
    let stack=[]
    let res=[]
    for(let i=0;i<nums2.length;i++){
        let curr=nums2[i]
        while(curr>stack[stack.length-1]){
            let top=stack.pop()
            obj[top]=curr
        }
        stack.push(curr)
    }
    for(let i of nums1){
        obj[i] ? res.push(obj[i]) : res.push(-1)
    }
return res
};