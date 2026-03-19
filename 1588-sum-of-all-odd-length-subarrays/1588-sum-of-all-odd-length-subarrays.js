/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]
            if ((j - i + 1) % 2 == 1) {
                res += sum
            }
        }
    }
    return res
};