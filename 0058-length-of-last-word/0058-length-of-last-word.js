/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let word = s.trim().split(' ');
    let last = word[word.length - 1];
    let lastLen = last.length
    return lastLen;
};