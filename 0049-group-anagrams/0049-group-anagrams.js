/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {}
    let arranged
    for (let i = 0; i < strs.length; i++) {
        arranged = strs[i].split('').sort().join('')
        if (!map[arranged]) {
            map[arranged] = []
        }
        map[arranged].push(strs[i])
    }
    return Object.values(map)
};