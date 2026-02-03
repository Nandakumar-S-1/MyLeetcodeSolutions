/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let i=0
    let ts=target.sort()
    let as=arr.sort()
    while(i<ts.length){
        if(ts[i]!==as[i]){
            return false
        }
        i++
    }
    return true
};