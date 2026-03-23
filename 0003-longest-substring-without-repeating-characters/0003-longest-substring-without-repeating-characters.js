/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let visited = new Map()
    let longest = 0
    let ind = 0
    for (let i = 0; i < s.length; i++) {
        if (visited.has(s[i]) && visited.get(s[i]) >= ind) {
            ind = visited.get(s[i]) + 1
        }
        visited.set(s[i], i)
        longest = Math.max(longest, i - ind + 1)
    }
    return longest
};