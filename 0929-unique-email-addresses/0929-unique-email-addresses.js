/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    let set = new Set()
    for (let e of emails) {
        let [local, domain] = e.split('@')
        local = local.split('+')[0].replaceAll('.', '')
        set.add(local + '@' + domain)
    }
    return set.size

};