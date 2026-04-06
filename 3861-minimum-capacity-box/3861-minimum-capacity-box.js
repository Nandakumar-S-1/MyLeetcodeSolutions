/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
var minimumIndex = function (capacity, itemSize) {
    let ind = -1
    let min = Infinity
    for (let i = 0; i < capacity.length; i++) {
        if (itemSize <= capacity[i]) {
            if (itemSize === capacity[i]) {
                return i
            }
            if (min>capacity[i]) {
                min = capacity[i]
                ind = i
            }
        }
    }
    return ind
};