/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let not=[]
    let min=Math.min(...nums)
    let max=Math.max(...nums)
    for(let i=min;i<=max;i++){
        not.push(i)
    }
    let res=[]
    for(let i of not){
        if(!nums.includes(i)){
            res.push(i)
        }
    }
    return res
};