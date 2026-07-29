/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    let s = stones.split('')
    let je = jewels.split('')
    for (let i = 0; i <= s.length; i++) {
        for (let j = 0; j < je.length; j++) {
            if (s[i] === je[j]) {
                count++
            }
        }
    }
    return count
};