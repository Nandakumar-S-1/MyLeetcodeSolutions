/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let stack1 = []
    let stack2 = []
    for (let char of s) {
        if (char == '#') {
            stack1.pop()
        } else {
            stack1.push(char)
        }
    }
    for (let char of t) {
        if (char == '#') {
            stack2.pop()
        } else {
            stack2.push(char)
        }
    }
    return stack1.join('')==stack2.join('')
};