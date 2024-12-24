const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
    for (i = 0; i < matrix.length; i += 1) {
      let subarray = matrix[i];
      for (j = 0; j < subarray.length; j += 1) {
        if (matrix[i][j] === '^^') {
          count +=1
        }
      }
    }
    return count
}

module.exports = {
  countCats
};
