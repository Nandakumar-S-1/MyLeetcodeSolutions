/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let j=0
    let count=0
    while(j<strs[0].length){
        let sorted=[]
        for(let i=0;i<strs.length;i++){
            sorted.push(strs[i][j])
        }
        let copy = [...sorted].sort()
        for(let i=0;i<sorted.length;i++){
            if(sorted[i]!==copy[i]){
                count++
                break
            }
        }
        j++
    }
    return count
};