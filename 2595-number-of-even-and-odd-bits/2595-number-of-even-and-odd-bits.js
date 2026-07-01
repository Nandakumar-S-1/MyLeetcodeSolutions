/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
    let arr=n.toString(2).split('').reverse()
    let e=0
    let o=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]==='1'){
            if(i%2===0){
                e++
            }else{
                o++
            }
        }
    }
    return [e,o]
};