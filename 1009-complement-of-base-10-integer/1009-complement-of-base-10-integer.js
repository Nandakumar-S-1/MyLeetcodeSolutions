/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    let val=n.toString(2).split('')
    let res = []
    for(let i=0;i<val.length;i++){
        if(val[i]==='1'){
            res[i]='0'
        }else{
            res[i]='1'
        }
    }
    res=res.join('')
    return parseInt(res,2)
}