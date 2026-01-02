/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let freq={}
    for(let i of nums){
        freq[i]=(freq[i]||0)+1
    }
    let n=nums.length/2
    for(let i in freq){
        if(freq[i]===n){
            return Number(i)
        }
    }
};