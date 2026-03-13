/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    if (arr.length < 3) return false

    let i=0
    while(i<arr.length-1 && arr[i]<arr[i+1]){
        i++
    }
    console.log(i,arr[i])
    if(i==0 || i==arr.length-1 || arr[i]===arr[arr.length-1]){
        return false
    }

    while(i<arr.length-1 && arr[i]>arr[i+1]){
        i++
    }

    return i===arr.length-1 ? true : false

    
};