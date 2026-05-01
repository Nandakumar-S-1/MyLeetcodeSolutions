/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let max = 0;
    for (let i of sentences) {
        const count = i.split(' ').length;
        max = Math.max(max, count)
    }
    return max;
};