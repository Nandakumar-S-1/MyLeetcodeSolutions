/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let p = pattern.split('')
    let w = s.split(' ')
    if (p.length !== w.length) return false

    let map = new Map()
    let dup = new Map()
    for (let i = 0; i < p.length; i++) {
        if (!map.has(p[i])) {
            if (dup.has(w[i])) {
                return false
            }
            map.set(p[i], w[i])
            dup.set(w[i], true)
        } else {
            if (map.get(p[i]) !== w[i]) {
                return false
            }
        }
    }
    return true
};