/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    let sum=nums[0]
    nums.shift()
    nums.sort((a,b)=>a-b)
    for(let i=0;i<2;i++){
        sum+=nums[i]
    }
    return sum
};