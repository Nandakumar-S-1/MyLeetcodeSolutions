/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }
    for (let i = 0; i < m + n - 1; i++) {
        for (let j = i + 1; j < m + n; j++) {
            if (nums1[i] > nums1[j]) {
                let temp = nums1[i]
                nums1[i] = nums1[j]
                nums1[j] = temp
            }
        }
    }
    return nums1
};