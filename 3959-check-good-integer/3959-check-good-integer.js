/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function (n) {
    let ssum = 0
    let dsum = 0
    let str = String(n)
    for (let i = 0; i < str.length; i++) {
        dsum += Number(str[i])
        ssum += Number(str[i] * str[i])
    }
    return ssum - dsum >= 50
};