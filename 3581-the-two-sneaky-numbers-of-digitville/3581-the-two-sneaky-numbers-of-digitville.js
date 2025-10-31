/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let freq=new Map()
    let res=[]
    for(let i of nums){
        let count=(freq.get(i)||0)+1
        freq.set(i,count)
        if(count===2){
            res.push(i)
        }
    }

return res
};