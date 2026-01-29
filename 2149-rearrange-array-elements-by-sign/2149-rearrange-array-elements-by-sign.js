/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let p=[]
    let n=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0)p.push(nums[i])
        else n.push(nums[i])
    }
    let res=[]
    let i=0
    while(i<p.length){
        res.push(p[i])
        res.push(n[i])
        i++
    }
    return res
};