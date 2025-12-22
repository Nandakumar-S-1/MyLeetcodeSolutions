/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let rev=String(n).split('').reverse().join('')
    rev=Number(rev)
    return Math.abs(n-rev)
    
};