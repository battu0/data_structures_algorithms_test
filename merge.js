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

console.log(merge([1,2,20,50], [7,9,11,300]))
console.log(merge([], [7,9,11,300]))