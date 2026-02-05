/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let n=nums.length
    let l=0
    let r=0
    let res=[]
    let sum=nums.reduce((a,c)=>a+c,0)
    console.log(sum)
    for(let i=0;i<nums.length;i++){
        let r =sum-l-nums[i]
        res[i]=Math.abs(l-r)
        l+=nums[i]
    }
    return res
};