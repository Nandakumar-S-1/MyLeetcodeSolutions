/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function (nums) {
    function isPrime(n) {
        if (n < 2) return false
        else {
            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) return false
            }
        }
        return true
    }
    let fst = 0
    let last = nums.length - 1
    for (let i = 0; i < nums.length; i++) {
        if (!isPrime(nums[fst])) {
            fst++
        }
        if (!isPrime(nums[last])) {
            last--
        }
        if (isPrime(nums[fst]) && isPrime(nums[last])) {
           return last-fst
        }
    }
};