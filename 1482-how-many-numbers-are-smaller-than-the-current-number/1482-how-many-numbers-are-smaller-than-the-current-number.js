/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let count=0
    let res=[]
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i]>nums[j]){
                count++
            }
        }
        res.push(count)
        count=0
    }
    return res
};