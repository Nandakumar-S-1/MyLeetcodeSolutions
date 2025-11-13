/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let a=nums.slice(0,n)
    let b=nums.slice(n)
    let res=[]
    for(let i=0;i<n;i++){
        res.push(a[i])
        res.push(b[i])
    }
    return res
};