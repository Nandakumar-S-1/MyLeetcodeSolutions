/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let newArr = [...nums1, ...nums2]
    let sorted = newArr.sort((a, b) => a - b)
    let n = sorted.length
    let middle = n / 2
    if (n % 2 != 0) {
        return sorted[Math.floor(n / 2)]
    } else {
        return (sorted[middle - 1] + sorted[middle]) / 2
    }
};