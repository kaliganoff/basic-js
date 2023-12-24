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
  let count = 0;
  return str.split('').map((el, index, array) => {
    if (el === array[index + 1]) {
      count++;
      return;
    } else {
      let result;
      if (count > 0) {
        result = (count + 1) + el;
      } else {
        result = el;
      }
      count = 0;
      return result;
    }
  }).join('');
}

module.exports = {
  encodeLine
};
