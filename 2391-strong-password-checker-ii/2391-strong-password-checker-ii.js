/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
    let res = password.split('')
    if (res.length < 8) return false
    let lower = false
    let upper = false
    let digit = false
    let char = false
    let adj = true
    for (let i = 0; i < res.length; i++) {
        if (res[i] >= 'a' && res[i] <= 'z') lower = true
        else if (res[i] >= 'A' && res[i] <= 'Z') upper = true
        else if (parseInt(res[i]) >= 0 && parseInt(res[i]) <= 9) digit = true
        else if ('!@#$%^&*()-+'.includes(res[i])) char = true
         if (res[i] === res[i + 1] && i < res.length - 1 ) adj = false

    }
    if (!lower || !upper || !digit || !char || !adj) {
        return false
    }
    return true
};