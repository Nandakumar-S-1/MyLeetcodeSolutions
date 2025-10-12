/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let freq = {}
    for (let i of nums) {
        freq[i] = (freq[i] || 0) + 1
    }
    let count = 0
  let limit = 2
  for (let i of nums) {
    if (freq[i] > 0) {
      let times = Math.min(freq[i], limit);
      for (let j = 0; j < times; j++) {
        nums[count++] = i
      }
      freq[i] = 0
    }
  }

  return count
}





