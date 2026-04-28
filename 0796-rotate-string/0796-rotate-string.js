/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    if (s.length !== goal.length) {
        return false
    }
    let arr = s.split('')
    for (let i = 0; i < arr.length; i++) {
        let fst = arr.shift()
        arr.push(fst)
        if (arr.join('') == goal) {
            return true
        }
    }
    return false
};