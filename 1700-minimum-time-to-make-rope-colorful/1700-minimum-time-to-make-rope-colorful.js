/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let max=neededTime[0]
    let total=0
    for(let i=1;i<colors.length;i++){
        if(colors[i]===colors[i-1]){
            total+=Math.min(neededTime[i],max)
            max=Math.max(neededTime[i],max)
        }else{
            max=neededTime[i]
        }
    }
   return total
};