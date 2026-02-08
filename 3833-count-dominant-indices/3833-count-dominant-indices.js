/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndices = function(nums) {
    let count=0
    let n=nums.length
    for(let i=0;i<n-1;i++){
        let sum=0
        let len=0
        for(let j=i+1;j<n;j++){
            sum+=nums[j]
            len++
        }
        if(nums[i]*len >sum){
            count++
        }
    }
    return count
};


