/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let res=0
    let count=0
    let rount=0
    for(let i=1;i<=n;i++){
        res+=rount+count+1
        count++
        if(count===7){
            count=0
            rount++
        }
    }        
return res
};