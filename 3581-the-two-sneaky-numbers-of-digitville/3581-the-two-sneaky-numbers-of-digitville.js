/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let freq={}
    let res=[]
    for(let i of nums){
        freq[i]=(freq[i]||0)+1
    }
    for(let i in freq){
        if(freq[i]===2){
            res.push(Number(i))
        }
    }
return res
};