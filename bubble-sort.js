// define swap function
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function bubbleSort(arr) {
  for (let i = arr.length-1; i >= 0 ; i--) {
    for (let j = 0; j <= i-1; j++) {
      console.log(arr, j, j+1)
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1)
      }
    }
    console.log("*** New Turn ***")
  }
  return arr
}

console.log(bubbleSort([2, 1, 10, 9, 5]))