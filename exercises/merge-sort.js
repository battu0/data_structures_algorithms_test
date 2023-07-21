// helper function
function merge(arr1, arr2) {
  let merged = []
  let i = 0
  let j = 0
  
  while (i < arr1.length && j < arr2.length ) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i])
      i++
    } else {
      merged.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    merged.push(i)
    i++
  }

  while (j < arr2.length) {
    merged.push(j)
    j++
  }
  return merged
}

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr
  // find mid point
  let mid = Math.floor(arr.length / 2)
  // recursive calls until it ... base case
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  // call merge arrays that have of 0 or 1 element
  return merge(left, right) 
}



console.log(mergeSort([2,1,7,4,3]))