/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let values = path.split('/')
    // console.log(values)
    let res = []
    for (let i of values) {
        if (i === '..') {
            if (res.length > 0) {
                res.pop()
            }
        } else if (i === '.' || i === '') {
            continue
        } else {
            res.push(i)
        }
    }
    return '/' + res.join('/')
    // console.log(res)
};