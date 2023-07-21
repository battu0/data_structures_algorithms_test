function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

// console.log(getDigit(20, 0))

function countDigit(num) {
  if (num.length === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1 
}

function maximumDigits(nums) { 
  let currentMax = 0;
  // loop over nums
  for (let i = 0; i < nums.length; i++) {
    currentMax = Math.max(countDigit(nums[i]), currentMax)
  }
  return currentMax
}

// console.log(maximumDigits([1, 23, 410]))

function radixSort(nums) {
  // find most digit num
  const mostDigitNum = maximumDigits(nums)
  // loop over k where k is # of digits
  for (let k = 0; k < mostDigitNum; k++) {
    // create buckets for 0 to 9
    let buckets = Array.from({length: 10}, () => [])
    // loop over every num
    for (let i = 0; i < nums.length; i++) {
      // push an element to corresponding buckets according to element kth index
      buckets[getDigit(nums[i], k)].push(nums[i])
    }
    // use spread operator
    nums = [].concat(...buckets)
  }
  return nums
}

console.log(radixSort([2, 1, 4, 7, 3]))