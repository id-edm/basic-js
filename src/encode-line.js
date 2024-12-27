const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let result = ""
	let count = 1

	for (let i = 0; i < str.length; i++) {
		let currSymbol = str[i]
		let nextSymbol = str[i + 1]
		if (currSymbol === nextSymbol) {
			count++
		} else {
			if (count > 1) {
				result += count + currSymbol
			} else {
				result += currSymbol
			}
			count = 1
		}
	}
  return result;
}

module.exports = {
  encodeLine
};
