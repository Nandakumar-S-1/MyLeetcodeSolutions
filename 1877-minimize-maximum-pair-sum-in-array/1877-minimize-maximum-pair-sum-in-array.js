/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    let sorted = nums.sort((a,b)=>a-b)
    let left=0
    let right=sorted.length-1
    let sums =[]
    while(left<=right){
        sums.push(sorted[left]+sorted[right])
        left++
        right--
    }
    return Math.max(...sums)
};