/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function(nums, k) {
    let sorted = nums.sort((a,b)=>a-b)
    let l=0
    let s=0 
    for(let i=0;i<k;i++){
        s+=sorted[i]
    }
    let rev=sorted.reverse()
    for(let i=0;i<k;i++){
        l+=rev[i]
    }
    return Math.abs(l-s)
};