/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let val=''
    for(let i =0;i<num.length;i++){
        if(num[i]==num[i+1] && num[i]==num[i+2]){
            let n= num[i]+num[i]+num[i]
            if(val<n){
                val = n
            }
        }
    }
    return val
};