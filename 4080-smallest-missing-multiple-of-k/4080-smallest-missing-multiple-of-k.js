/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    let set=new Set()
    for(let i of nums){
        set.add(i)
    }
    let i=k
    while(set.has(i)){
        i+=k
    }
    return i
};