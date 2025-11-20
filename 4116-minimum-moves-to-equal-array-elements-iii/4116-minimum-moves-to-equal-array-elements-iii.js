/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let max=Math.max(...nums)
    let count=0
    let sorted=nums.sort((a,b)=>a-b)
    let i=0
    while(sorted[i]!==max ){
        sorted[i]+=1
        if(sorted[i]===max){
            i++
        }
        count++
    }
    return count
}