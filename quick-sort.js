// function pivot(arr, startIndex=0, endIndex=arr.length + 1) {

//   function swap(array, i, j) {
//     var temp = array[i]
//     array[i] = array[j]
//     array[j] = temp
//   }

//   let pivot = arr[startIndex]
//   let swapIndex = startIndex

//   for (let i = startIndex + 1; i <= arr.length; i++) {
//     if (pivot > arr[i]) { 
//       swapIndex++
//       swap(arr, swapIndex, i)
//     }
//     // swap the pivot with the pivot index
//   }
//   swap(arr, startIndex, swapIndex)
//   return swapIndex
// }

// function quickSort(arr, left=0, right=arr.length-1) {
//   if (left < right) {
//     let pivotIndex = pivot(arr, length, right)
//     // left
//     quickSort(arr, left, pivotIndex-1)
//     // right
//     quickSort(arr, pivotIndex+1, right)
//   }
//   return arr;
// }

// ****************

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function pivot(arr, start=0, end=arr.length-1) {
  let pivot = arr[start]
  let swapIdx = start
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}

function quickSort(arr, left=0, right=arr.length-1) {
  if (left < right) {
  // get pivot point
  let pivot = pivot(arr, left, right)
  // call quick sort recursively
    quickSort(arr, 0, pivot-1)
    quickSort(arr, pivot+1, right)
  return arr;
  }
}