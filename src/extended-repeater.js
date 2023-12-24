const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = options.addition;
  if (addition === null) {
    addition = 'null';
  }
  let additionRepTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';
  
  let additionRep = Array(additionRepTimes).fill(addition).join(additionSeparator);
  let strRep = str + additionRep;
  
  return Array(repTimes).fill(strRep).join(separator);
}

module.exports = {
  repeater
};
