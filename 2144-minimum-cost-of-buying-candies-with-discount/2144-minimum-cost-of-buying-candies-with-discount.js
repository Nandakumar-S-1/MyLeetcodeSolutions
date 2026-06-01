/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    let c = 0
    cost.sort((a, b) => b - a)
    for (let i = 0; i < cost.length; i += 3) {
        c += cost[i] + (cost[i + 1] || 0)
    }
    return c
};