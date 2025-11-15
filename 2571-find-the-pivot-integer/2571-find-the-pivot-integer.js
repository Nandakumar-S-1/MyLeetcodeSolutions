/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    for(let i=1;i<=n;i++){
        if(sum(1,i)===sum(i,n)){
            return i
        }
    }
    function sum(fst,last){
        let val=0
        for(let i=fst;i<=last;i++){
            val+=i
        }
        return val
    }
    return -1
};