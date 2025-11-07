/**
 * @param {number} n
 * @return {number}
 */
var getLeastFrequentDigit = function(n) {
    let str=n.toString().split('')
    let freq={}
    for(let i of str){
        freq[i]=(freq[i]||0)+1
    }
    let minfr=Infinity
    for(let i in freq){
        if(freq[i]<minfr){
            minfr=freq[i]
        }
    }
   let min=Infinity
   for(let i in freq){
    if(freq[i]===minfr){
        if(Number(i)<min){
            min=Number(i)
        }
    }
   }
   return min
};