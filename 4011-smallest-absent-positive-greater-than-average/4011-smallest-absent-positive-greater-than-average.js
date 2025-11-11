/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestAbsent = function(nums) {
    let sum=nums.reduce((acc,curr)=>acc+curr,0)
    let count=nums.length
    let avg=sum/count 
    let set=new Set()

    for(let i=0;i<nums.length;i++){
        set.add(nums[i])
    }
    let fst=Math.floor(avg)+1
    if(fst<=0)fst=1
    while(set.has(fst)){
        fst++
    }
    return fst
};