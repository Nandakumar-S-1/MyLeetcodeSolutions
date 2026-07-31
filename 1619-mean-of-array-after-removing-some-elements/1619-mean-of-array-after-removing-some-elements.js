/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    let sort = arr.sort((a, b) => a - b)
    let sum = 0
    let count = 0
    let remove = Math.floor(arr.length * 0.05)

    for (let i = remove; i < arr.length - remove; i++) {
        sum += arr[i]
        count++
    }
    return sum / count
};