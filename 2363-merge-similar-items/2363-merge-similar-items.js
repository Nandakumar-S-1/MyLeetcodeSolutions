/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
    let map = new Map()
    for (let [i, j] of items1) {
        map.set(i, (map.get(i) || 0) + j)
    }
    for (let [i, j] of items2) {
        map.set(i, (map.get(i) || 0) + j)
    }
    return [...map].sort((i, j) => i[0] - j[0])
};