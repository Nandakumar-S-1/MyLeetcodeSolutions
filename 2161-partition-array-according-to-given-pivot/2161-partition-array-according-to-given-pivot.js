/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    let lesser = []
    let equal = []
    let larger = []
    for (let i of nums) {
        if (i < pivot) {
            lesser.push(i)
        } else if (i == pivot) {
            equal.push(i)
        } else {
            larger.push(i)
        }
    }
    return [...lesser, ...equal, ...larger]
};