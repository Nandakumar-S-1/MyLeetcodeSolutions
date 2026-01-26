/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);

    let min = Infinity;
    let res = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let diff = arr[i + 1] - arr[i];
        if (diff < min) {
            min = diff;
        }
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] === min) {
            res.push([arr[i], arr[i + 1]]);
        }
    }

    return res;
};
