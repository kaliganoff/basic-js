const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let stats = {};
  
  for (domain of domains) {
    let partsReversed = domain.split('.').reverse();
    let dns = '';
    for (part of partsReversed) {
      dns += '.' + part;
      stats[dns] = stats[dns] !== undefined ? stats[dns] + 1 : 1;
    }
  }
  return stats;
}

module.exports = {
  getDNSStats
};
