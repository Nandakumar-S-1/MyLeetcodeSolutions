/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let count=0
    let arr=s.split('')

    for(let i=0;i<arr.length-1;i++){
        if(arr[i].toLowerCase()!==arr[i+1].toLowerCase()){
            count++
        }
    }
return count
};