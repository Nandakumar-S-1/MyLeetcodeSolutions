/**
 * @param {number[][]} intervals
 * @return {number}
 */
var countIntersectingIntervals = function(intervals) {
    let count=0
    let rows=intervals.length
    for(let i=0;i<rows-1;i++){
        for(let j=i+1;j<rows;j++){
            if(intervals[i][1]>=intervals[j][0] && intervals[j][1]>=intervals[i][0]){
                count++
            }
        }
    }
    return count
};