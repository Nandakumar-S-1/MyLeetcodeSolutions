/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    let odd=0
    let even=0
    for(let i=0;i<nums.length;i++){
        if(i%2==0){
            even+=nums[i]
        }else{
            odd-=nums[i]
        }
    }
    return odd+even
};