/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var limitOccurrences = function(nums, k) {
    let freq={}
    let res=[]
    for(let i of nums){
        freq[i]=(freq[i]||0)+1
        if(freq[i]<=k){
            res.push(i)
        }
    }
    return res
};