/**
 * @param {number[]} nums
 * @return {number}
 */
var minAbsoluteDifference = function(nums) {
    let res=Infinity
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i]===1 &&nums[j]===2){
                res = Math.min(res,Math.abs(i-j))
            }
        }
    }
    return res===Infinity ? -1 : res
};