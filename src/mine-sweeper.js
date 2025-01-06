const { NotImplementedError } = require('../extensions/index.js')

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  
  for (let row = 0; row < matrix.length; row++) {
    result[row] = [];

    for (let col = 0; col < matrix[row].length; col++) {
      let count = 0;

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) {
            continue;
          }

          const neigRow = row + i;
          const neigCol = col + j;

          if (
            neigRow >= 0 && neigRow < matrix.length && neigCol >= 0 && neigCol < matrix[row].length
          ) {
            if (matrix[neigRow][neigCol]) {
              count++;
            }
          }
        }
      }

      result[row][col] = count;
    }
  }

  return result;
}

module.exports = {
  minesweeper
}
