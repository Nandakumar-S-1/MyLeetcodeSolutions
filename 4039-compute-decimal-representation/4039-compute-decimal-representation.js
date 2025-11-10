/**
 * @param {number} n
 * @return {number[]}
 */
var decimalRepresentation = function(n) {
    let str= `${n}`
    let res=[]
    let ind=str.length
    for(let i=0;i<str.length;i++){
        ind--
        let num=Number(str[i]+'0'.repeat(ind))
        if(num!==0){
            res.push(num)
        }
    }
    return res
};