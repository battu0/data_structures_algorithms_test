// Algorithm exercises

// Merge sort

// Helper function

// function merge(arr1, arr2) {
//   // create an empty array
//   let merged = []
//   let i = 0
//   let j = 0
//   // take a look at the smallest values in each input array
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       merged.push(arr1[i])
//       i++
//     } else {
//       merged.push(arr2[j])
//       j++
//     }
//   }
//   while (i < arr1.length) {
//     merged.push(arr1[i])
//     i++
//   }

//   while (j < arr2.length) {
//     merged.push(arr2[j])
//     j++
//   } 
//   return merged
// }

// function mergeSort(arr) {
//   // break up the array into halves
//   let mid = Math.floor(arr.length / 2)
//   let left = mergeSort(arr.slice(0, mid)) // second argument number is excluded
//   let right = mergeSort(arr.slice(mid))
//   return merge(left, right)
// }


// Quick sort

// Helper functions

// Swap helper function
// const swap = (arr, idx1, idx2) => {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
// }

// // Pivot helper function
// function pivot(arr, startIdx=0, endIdx=arr.length-1) {
//   // grab the pivot from the start of the array
//   let pivot = arr[startIdx]
//   // store the current pivot index in a variable
//   let pivotIdx = startIdx;
//   for (let i = startIdx+1; i < arr.length; i++) {
//     if (pivot > arr[i]) {
//       pivotIdx++
//       swap(arr, i, pivotIdx)
//     }
//   }
//   // numbers lower than the pivot is stacked beside
//   swap(arr, startIdx, pivotIdx) // swap in-place
//   return pivotIdx
// }

// // Quick Sort

// function quickSort(arr, left=0, right=arr.length-1) {
//   let pivot = pivot(arr, left, right)
//   while (left < right) {
//     quickSort(arr, left, pivot-1)
//     quickSort(arr, pivot+1, right)
//   }
//   return arr
// }

// [2, 1, 10, 9, 5]

// 1st iteration
// quickSort([2, 1, 10, 9, 5], 0, 4)
//  pivot = 1
// quickSort([1, 2, 10, 9, 5], 0, 0)
// pivot = 
// quickSort([2, 1, 10, 9, 5], 2, 4)

// // Radix sort

// // Helper functions

// function getDigit(num, i) {
//   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10; 
// }

// function digitCount(num) {
//   if (num === 0) return 1;
//   return Math.floor(Math.log10(Math.abs(num))) + 1;
// }

// function mostDigits(nums) {
//   let maxDigits = 0
//   for (let i = 0; i < nums.length; i++) {
//     maxDigits = Math.max(maxDigits, digitCount(nums[i]))
//   }
//   return maxDigits
// }

// function radixSort(nums) {
//   // figure out how many digits the largest number has
//   let mostDigitNum = mostDigits(nums)
//   // loop from k = 0 up to this largest number of digits
//   for (let k = 0; k < mostDigitNum; k++) {
//     // create buckets for each digit
//     let buckets = Array.from({length: 10},  () => [])
//     // place each number in the corresponding bucket based on its kth digit
//     for (let i = 0; i < nums.length; i++) {
//       buckets[getDigit(nums[i], k)].push(nums[i]) 
//     }
//     nums = [].concat(...buckets)
//   }
//   return nums
// }

console.log(radixSort([3,1,11,7,6]))