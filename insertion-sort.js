// define swap function
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function insertionSort(arr) {
  let lowest;
  for (let i = 0; i < arr.length; i++) {
    lowest = i
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        lowest = j
      }
    }
    swap(arr, lowest, i)    
  }
  return arr
}

console.log(insertionSort([2, 1, 10, 9, 5]))