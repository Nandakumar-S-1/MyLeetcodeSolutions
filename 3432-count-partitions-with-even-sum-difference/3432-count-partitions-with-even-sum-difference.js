/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
    let total = 0
    for (let num of nums) {
        total += num
    }
    return total % 2 !== 0 ? 0 : nums.length - 1
};


// var countPartitions = function(nums) {
//     let count=0
//     let left=[]

//     for(let i=0;i<nums.length-1;i++){
//         left.push(nums[i])
//         let right=[]
//         for(let j=i+1;j<nums.length;j++){
//             right.push(nums[j])    
//         }
//         let ls=left.reduce((acc,curr)=>acc+curr,0)
//         let rs=right.reduce((acc,curr)=>acc+curr,0)
//         if(Math.abs(ls-rs)%2===0){
//             count++
//         }
//     }
//     return count
// };