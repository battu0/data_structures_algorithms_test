function merge(array1, array2) { 
  let res = []
  let i = 0
  let j = 0
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      res.push(array1[i])
      i++
    } else {
      res.push(array2[j])
      j++
    }
  }
  while (i < array1.length) {
    res.push(array1[i])
    i++
  }
  while (j < array2.length) {
    res.push(array2[j])
    j++
  }
  return res
}

function mergeSort(arr) {
  // define base case first
  if (arr.length <= 1) return arr

  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  // right side of the array will be longer in odd numbered arrays
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]))
