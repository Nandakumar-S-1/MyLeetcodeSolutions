/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    for(let i=0;i<=Math.sqrt(num);i++){
        if(i*i==num){
            return true
        }
    }
    return false
};