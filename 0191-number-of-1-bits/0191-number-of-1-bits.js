/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
   return n.toString(2).split("0").join('').length
};