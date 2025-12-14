/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let str=String(num)
    if(str.length===1)return true
    if(str[str.length-1]==='0')return false
    let rev1=str.split('').reverse('').join('')
    let rev2=rev1.split('').reverse('').join('')
   return num==rev2
};