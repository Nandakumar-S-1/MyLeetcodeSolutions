/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    let str = n.toString(2)
    let long = 0
    for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] == '1' && str[j] == '1') {
                long = Math.max(long ,j - i)
                break
            }
        }
    }
    return long
};