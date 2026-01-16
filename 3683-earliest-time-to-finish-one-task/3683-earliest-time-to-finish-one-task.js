/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function(tasks) {
    let min=Infinity
    for(let t of tasks){
        let sum=0
        for(let i of t){
            sum+=i
        }
        if(sum<min){
            min=sum
        }
    }
return min
};