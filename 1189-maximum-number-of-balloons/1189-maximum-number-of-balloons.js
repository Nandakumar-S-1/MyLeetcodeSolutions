/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let str = 'balloon'
    let freq = {}
    let count = 0
    for (let i of text) {
        if (str.includes(i)) {
            freq[i] = (freq[i] || 0) + 1
        }
    }
    return Math.min(
        freq.b || 0,
        freq.a || 0,
        Math.floor((freq.l || 0)/2),
        Math.floor((freq.o || 0)/2),
        freq.n || 0
    )
};