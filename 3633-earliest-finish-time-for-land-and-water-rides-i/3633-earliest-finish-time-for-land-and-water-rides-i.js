/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function (l, landDuration, w, waterDuration) {
    let res = Infinity
    for (let i = 0; i < l.length; i++) {
        for (let j = 0; j < w.length; j++) {
            res = Math.min(res,
                          Math.max(l[i] + landDuration[i], w[j]) +
                          waterDuration[j],
                          Math.max(w[j] + waterDuration[j], l[i]) +
                          landDuration[i])
        }
    }
return res
};