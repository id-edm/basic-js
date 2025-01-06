const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    let nextIndex = i + 1
    let lastIndex = i - 1
    switch (arr[i]) {
      case '--discard-next':
        delete arr[nextIndex]; 
          break
      case '--discard-prev':
        delete newArr[lastIndex];
          break
      case '--double-next':
        newArr.push(arr[nextIndex]);
          break
      case '--double-prev':
        newArr.push(arr[lastIndex]);
        break
      default: newArr.push(arr[i])
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    if (!newArr[i]) {
      newArr.splice(i, 1)
      i--
    }
  }

  return newArr
}

module.exports = {
  transform
}
