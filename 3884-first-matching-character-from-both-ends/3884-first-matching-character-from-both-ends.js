/**
 * @param {string} s
 * @return {number}
 */
var firstMatchingIndex = function(s) {
    let i=0
    let n=s.length
    while(i<n){
        if(s[i]===s[n-i-1]){
            return i
        }
        i++
    }
    return -1
};