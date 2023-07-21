// define swap function
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function selectionSort(arr) {
  // repeat (numOfElements - 1) times
  for (let i = 0; i < arr.length; i++) {
    // set the first unsorted element as the minimum
    let lowest = i
    // for each of the unsorted elements
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
        // swap lowest with the first unsorted position
      }
    }
    // swap minimum with first unsorted position
    swap(arr, lowest, i)
  }
  return arr
}

console.log(selectionSort([2,1,10,9,5]))

// [2, 1, 10, 9, 5]