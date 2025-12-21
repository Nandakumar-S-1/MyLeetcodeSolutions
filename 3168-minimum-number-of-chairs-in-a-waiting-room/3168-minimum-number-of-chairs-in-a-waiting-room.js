/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let max=0
    let count=0
    for(let i=0;i<s.length;i++){
        if(s[i]=='E'){
            count++
            max=Math.max(max,count)
        }else{
            count--
        }
    }
    return max
};