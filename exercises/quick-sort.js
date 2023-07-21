// Helper functions

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function pivot(arr, startIdx=0, endIdx=arr.length-1) {
  // pick first val as pivot
  let pivot = arr[startIdx]
  // store pivot index
  let pivotIdx = startIdx
  for (let i = startIdx+1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pivotIdx++
      swap(arr, i, pivotIdx)
    }
  }
  swap(arr, startIdx, pivotIdx)
  return pivotIdx
}

function quickSort(arr, left=0, right=arr.length-1) {
  // store pivot point 
  let pivot = pivot(arr, left, right)
  // repeat calling quickSort until left and right becomes the same length,
  // bc 
  while (left < right) {
    // we say pivot-1 and pivot+1 because we already find the right idx of 'pivot'
    quickSort(arr, left, pivot-1)
    quickSort(arr, pivot+1, right)
  }
  return quickSort
}

console.log(quickSort([2, 1, 7, 4, 3]))