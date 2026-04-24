/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let count=0
    let blank=0
    for(let i of moves){
        if(i==='L'){
            count--
        }else if(i==='R'){
            count++
        }else{
            blank++
        }
    }
    return Math.abs(count)+blank
};