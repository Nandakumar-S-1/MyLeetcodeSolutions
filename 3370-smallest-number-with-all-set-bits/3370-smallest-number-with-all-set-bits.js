/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n) {
    let str = n.toString(2).split('')
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            str[i] = '1'
        }
    }
    str = str.join('')
    let res = parseInt(str, 2)
    return res
};