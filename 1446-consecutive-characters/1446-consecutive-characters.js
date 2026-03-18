/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let c=1
    let max=1
    for(let i=1;i<s.length;i++){
        if(s[i]===s[i-1]){
            c++
        }else{
            c=1
        }
        max=Math.max(max,c)
    }
    return max
};