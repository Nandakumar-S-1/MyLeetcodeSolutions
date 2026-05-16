/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let start = 0
    let end = s.length - 1
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

    let res = [...s]
    while (start < end) {
        if (!vowels.has(res[start])) {
            start++
        }
        if (!vowels.has(res[end])) {
            end--
        }
        if (vowels.has(res[start]) && vowels.has(res[end])) {
            [res[start], res[end]] = [res[end], res[start]]
            start++
            end--
        }
    }
    return res.join('')
};