/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    let count = 0
    let set = new Set(word)
    for (let i of set) {
        if (i >= 'a' && i <= 'z' && set.has(i.toUpperCase())) {
            count++
        }
    }
    return count
};