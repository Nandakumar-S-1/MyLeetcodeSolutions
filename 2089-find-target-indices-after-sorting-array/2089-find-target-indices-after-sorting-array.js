/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let res=[]
    let sorted = nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
        if(target===sorted[i]){
            res.push(i)
        }
    }
    return res
};