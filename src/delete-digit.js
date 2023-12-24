const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('');
  arr = arr.map((el, index) => el = arr.slice(0, index).concat(arr.slice(index + 1)).join(''));
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
